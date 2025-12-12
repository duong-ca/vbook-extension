load('config.js');

function execute() {
    return Response.success([
        { title: "玄幻奇幻", input: BASE_URL + "class_1_1.html", script: "gen.js" },
        { title: "武侠仙侠", input: BASE_URL + "class_2_1.html", script: "gen.js" },
        { title: "现代都市", input: BASE_URL + "class_3_1.html", script: "gen.js" },
        { title: "历史军事", input: BASE_URL + "class_4_1.html", script: "gen.js" },
        { title: "科幻小说", input: BASE_URL + "class_5_1.html", script: "gen.js" },
        { title: "游戏竞技", input: BASE_URL + "class_6_1.html", script: "gen.js" },
        { title: "恐怖灵异", input: BASE_URL + "class_7_1.html", script: "gen.js" },
        { title: "言情小说", input: BASE_URL + "class_8_1.html", script: "gen.js" },
        { title: "动漫同人", input: BASE_URL + "class_9_1.html", script: "gen.js" },
        { title: "其他类型", input: BASE_URL + "class_10_1.html", script: "gen.js" },
        { title: "排行榜", input: BASE_URL + "top/allvisit_1.html", script: "gen.js" }
    ]);
}