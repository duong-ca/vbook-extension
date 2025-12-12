load('config.js');

function execute() {
    return Response.success([
        {title: "全 本", input: "https://uukanshu.cc/quanben/", script: "gen.js" },
    ]);
}
