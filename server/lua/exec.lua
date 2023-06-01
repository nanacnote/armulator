local exec = {}

function exec.kstool()
    local method = ngx.req.get_method()
    if method ~= "POST" then
        ngx.exit(ngx.HTTP_NOT_ALLOWED)
    end

    ngx.req.read_body()
    local req_body = ngx.req.get_body_data()

    if not req_body then
        ngx.exit(ngx.HTTP_BAD_REQUEST)
    end

    local req_body_json = cjson.decode(req_body)
    local arch_mode = req_body_json.arch_mode
    local asm_str = req_body_json.asm_str
    local ret = { text = {} }

    if not (arch_mode and asm_str) then
        ngx.exit(ngx.HTTP_BAD_REQUEST)
    end

    local command_parts = { "kstool", arch_mode }

    for instruction in asm_str:gmatch("([^;]+)") do
        table.insert(command_parts, "\"" .. instruction .. "\"")
        local p_handler, err = io.popen(table.concat(command_parts, " "))

        if not p_handler then
            ngx.exit(ngx.HTTP_BAD_REQUEST)
        else
            local m_code = p_handler:read("*a")
            p_handler:close()

            if m_code:find("ERROR:", 1, true) then
                ngx.exit(ngx.HTTP_BAD_REQUEST)
            else
                local unfmt_m_code = m_code:match("=%s*%[(.-)%]")
                local fmt_m_code = unfmt_m_code:gsub("%s+", "")
                table.insert(ret.text, fmt_m_code)
            end
        end

        table.remove(command_parts)
    end

    ngx.say(cjson.encode(ret))
end

return exec