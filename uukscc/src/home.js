load('config.js');

function execute() {
    return Response.success([
        { title: "排行榜", input: BASE_URL + "top/allvisit_1.html", script: "gen.js" },
        { title: "玄幻奇幻", input: BASE_URL + "class_1_1.html", script: "gen.js" },
        { title: "武俠仙俠", input: BASE_URL + "class_2_1.html", script: "gen.js" },
        { title: "現代都市", input: BASE_URL + "class_3_1.html", script: "gen.js" },
        { title: "歷史軍事", input: BASE_URL + "class_4_1.html", script: "gen.js" },
        { title: "科幻小說", input: BASE_URL + "class_5_1.html", script: "gen.js" },
        { title: "遊戲競技", input: BASE_URL + "class_6_1.html", script: "gen.js" },
        { title: "言情小說", input: BASE_URL + "class_8_1.html", script: "gen.js" }
    ]);
}