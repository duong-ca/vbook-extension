load('config.js');

function execute() {
    return Response.success([
        { title: "全本", input: BASE_URL + "quanben/", script: "gen.js" },
        { title: "最近更新", input: BASE_URL, script: "gen.js" },
        { title: "玄幻奇幻", input: BASE_URL + "class_1_1.html", script: "gen.js" },
        { title: "武侠仙侠", input: BASE_URL + "class_2_1.html", script: "gen.js" },
        { title: "现代都市", input: BASE_URL + "class_3_1.html", script: "gen.js" },
        { title: "历史军事", input: BASE_URL + "class_4_1.html", script: "gen.js" },
        { title: "科幻小说", input: BASE_URL + "class_5_1.html", script: "gen.js" },
        { title: "游戏竞技", input: BASE_URL + "class_6_1.html", script: "gen.js" },
        { title: "言情小说", input: BASE_URL + "class_8_1.html", script: "gen.js" }
    ]);
}