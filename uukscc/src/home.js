load('config.js');

function execute() {
    return Response.success([
        {title: "熱門小說推薦", input: "https://uukanshu.cc", script: "homecontent_fengtui.js"},
        {title: "閱讀排行榜", input: "https://uukanshu.cc/", script: "homecontent_fengyou.js"},
        {title: "最新小說", input: "https://uukanshu.cc", script: "homecontent_zuixin.js"},
        {title: "最近更新", input: "https://uukanshu.cc", script: "homecontent_gengxin.js"}
    ]);
}
