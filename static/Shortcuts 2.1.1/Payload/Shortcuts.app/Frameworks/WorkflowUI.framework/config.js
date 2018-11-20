var configForFileType = function(filetype) {
    switch (filetype) {
    case "js":
        return {
            "syntax_plugin": "js_syntax.js",
            "highlight_plugin": "js_highlight.js",
            "color_scheme": "default_colorscheme.js"
        };

    case "rkt":
    case "ss":
    case "scm":
    case "sch":
        return {
            "syntax_plugin": "scheme_syntax.js",
            "highlight_plugin": "scheme_highlight.js",
            "color_scheme": "terminal_colorscheme.js"
        };

    default:
        return;
    };
};

config.syntaxPluginForFileType = function(filetype) {
    var conf = configForFileType(filetype);
    if (!conf)
        return;

    return conf["syntax_plugin"];
};

config.colorSchemeForFileType = function(filetype) {
    var conf = configForFileType(filetype);
    if (!conf)
        return;

    return conf["color_scheme"];
};

config.highlightingPluginForFileType = function(filetype) {
    var conf = configForFileType(filetype);
    if (!conf)
        return;

    return conf["highlight_plugin"];
};
