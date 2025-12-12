load('config.js');

function execute() {
    return Response.success([
        {title: "熱門小說推薦", input: "https://uukanshu.cc/quanben/", script: "gen.js"},
    ]);
}

