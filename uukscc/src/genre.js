load('config.js');

function execute() {
    return Response.success([
        { title: "玄幻奇幻", input: "class_1_1.html", script: "gen.js" },
        { title: "武侠仙侠", input: "class_2_1.html", script: "gen.js" },
        { title: "现代都市", input: "class_3_1.html", script: "gen.js" },
        { title: "历史军事", input: "class_4_1.html", script: "gen.js" },
        { title: "科幻小说", input: "class_5_1.html", script: "gen.js" },
        { title: "游戏竞技", input: "class_6_1.html", script: "gen.js" },
        { title: "恐怖灵异", input: "class_7_1.html", script: "gen.js" },
        { title: "言情小说", input: "class_8_1.html", script: "gen.js" },
        { title: "动漫同人", input: "class_9_1.html", script: "gen.js" },
        { title: "其他类型", input: "class_10_1.html", script: "gen.js" },
        { title: "排行榜", input: "top/allvisit_1.html", script: "gen.js" }
    ]);
}