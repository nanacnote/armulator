# build core library
FROM node:14 as core_lib_builder
WORKDIR /usr/src/app
COPY core .
RUN npm i && npm run build && rm -rf node_modules


# build react frontend
FROM node:14 as node_builder
WORKDIR /usr/src/app
COPY web .
RUN npm i
COPY --from=core_lib_builder ./usr/src/app /usr/src/app/node_modules/armulator-core
RUN npm run build


FROM openresty/openresty:jammy

RUN apt-get update && apt-get install -y \
    git \
    vim \
    zip \
    time \
    python2 \
    python3 \
    cmake \
    pkg-config \
    libglib2.0-dev \
    capstone-tool \
    libcapstone4 \
    libcapstone-dev \
    gcc-12-arm-linux-gnueabi

# # install vcpkg manager and use it to install keystone engine and symlink the keystone libraries to the gcc search path
# RUN mkdir -p /opt/vcpkg
# WORKDIR /opt/vcpkg
# RUN git clone https://github.com/microsoft/vcpkg.git .
# RUN ./bootstrap-vcpkg.sh -disableMetrics && \
#     ./vcpkg install keystone
# RUN ln -s /opt/vcpkg/packages/keystone_x64-linux/include/keystone /usr/include/keystone && \
#     ln -s /opt/vcpkg/packages/keystone_x64-linux/lib/libkeystone.a /usr/lib/$(uname -i)-linux-gnu/libkeystone.a

# build and install keystone engine and symlink the keystone libraries to the gcc search path
RUN mkdir -p /opt/keystone-engine
WORKDIR /opt/keystone-engine
RUN git clone https://github.com/keystone-engine/keystone.git .
RUN mkdir build && \
    cd build && \
    ../make-share.sh && \
    cmake -DCMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=OFF -DLLVM_TARGETS_TO_BUILD="ARM" -G "Unix Makefiles" .. && \
    make -j8 && \
    make install
RUN ln -s /opt/keystone-engine/include/keystone /usr/include/keystone

# build and install unicorn cpu emulator symlink the unicorn libraries to the gcc search path
RUN mkdir -p /opt/unicorn-emulator
WORKDIR /opt/unicorn-emulator
RUN git clone https://github.com/unicorn-engine/unicorn.git .
RUN mkdir build && \
    cd build && \
    cmake .. -DCMAKE_BUILD_TYPE=Release && \
    make
RUN ln -s /opt/unicorn-emulator/include/unicorn /usr/include/unicorn && \
    ln -s /opt/unicorn-emulator/build/libunicorn.so.2 /usr/lib/$(uname -i)-linux-gnu/libunicorn.so.2 && \
    ln -s /opt/unicorn-emulator/build/libunicorn.so.2 /usr/lib/$(uname -i)-linux-gnu/libunicorn.so 

WORKDIR /

COPY server/html /usr/local/openresty/nginx/html
COPY server/docs /usr/local/openresty/nginx/docs
COPY server/lua /usr/local/openresty/nginx/lua
COPY server/default.conf /etc/nginx/conf.d/

COPY --from=node_builder ./usr/src/app/dist /usr/local/openresty/nginx/html

EXPOSE 80
