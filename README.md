## ARMulator

A web-based application that allows users to input a subset of ARM assembly instructions and visually execute and understand how the instructions are processed within the CPU registers and RAM. The motivation for this project is to provide novice learners with a better understanding of how machine code is executed at the hardware level and how Assembly language works.

### Hosted Demo

<!-- [Here](http://armulator.aal.hiramlabs.com/) -->

### Core Library Documentation

[Here](https://github.com/nanacnote/armulator/blob/main/core/API.md)

### Requirements

Node 14

Docker 4.2.0

### Developer Setup

```bash
git clone https://github.com/nanacnote/armulator.git    # clone the application repository
cd armulator                                            # check out the application directory
chmod +x ./run                                          # make the run script executable (unix like systems)
./run init                                              # install dependencies in both core and web directories
```

### Running Locally

```bash
git clone https://github.com/nanacnote/armulator.git    # clone the application repository
cd armulator                                            # check out the application directory
chmod +x ./run                                          # make the run script executable (unix like systems)
./run docker:start                                      # Start a docker container
```

After executing the _Running Locally_ commands, navigate to `localhost:9001` in your browser

### Notes

The `core library` is included in the `web` application via `npm link` when `./run init` is executed.
