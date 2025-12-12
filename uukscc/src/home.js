load('config.js');

function execute() {
    return Response.success([
        { title: "全本", input: "https://uukanshu.cc/quanben/", script: "gen.js" },
        { title: "玄幻奇幻", input: "https://uukanshu.cc/class_1_1.html", script: "gen.js" },
        { title: "武侠仙侠", input: "https://uukanshu.cc/class_2_1.html", script: "gen.js" },
        { title: "现代都市", input: "https://uukanshu.cc/class_3_1.html", script: "gen.js" },
        { title: "历史军事", input: "https://uukanshu.cc/class_4_1.html", script: "gen.js" },
        { title: "科幻小说", input: "https://uukanshu.cc/class_5_1.html", script: "gen.js" },
        { title: "游戏竞技", input: "https://uukanshu.cc/class_6_1.html", script: "gen.js" },
        { title: "言情小说", input: "https://uukanshu.cc/class_8_1.html", script: "gen.js" },
    ]);
}