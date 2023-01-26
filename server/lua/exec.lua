local exec = {}

function exec.kstool()
    if ngx.req.get_method() ~= "POST" then ngx.exit(ngx.HTTP_NOT_ALLOWED) end

    ngx.req.read_body()
    local req_body = ngx.req.get_body_data()

    if not req_body then ngx.exit(ngx.HTTP_NO_CONTENT) end

    local req_body_json = cjson.decode(req_body)
    local arch_mode = req_body_json.arch_mode
    local asm_str = string.gsub(req_body_json.asm_str, "\"", "\\\"")
    local ret = {text = {}}

    if (arch_mode == nil or arch_mode == "") or (asm_str == nil or asm_str == "") then ngx.exit(ngx.HTTP_NO_CONTENT) end

    -- TODO: sanitize incoming string by escaping all double quotes

    for instruction in asm_str:gmatch("([^;]+)") do
        local p_handler = io.popen("/opt/vcpkg/packages/keystone_x64-linux/tools/keystone/kstool" .. " " .. arch_mode .. " " .. "\"" .. instruction .. "\"")
        local m_code = p_handler:read("a")
        local exit_code = p_handler:close()

        if m_code:find("ERROR:", 1, true) then 
            table.insert(ret.text, false)
        else
            local unfmt_m_code = m_code:match("=%s*%[(.-)%]")
            local fmt_m_code = unfmt_m_code:gsub("%s+", "")
            table.insert(ret.text, fmt_m_code)
        end
    end

    -- TODO: raise error if the text array in ret is empty

    ngx.say(cjson.encode(ret))
end

return exec