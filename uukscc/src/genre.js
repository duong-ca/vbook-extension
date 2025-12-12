load('config.js');

function execute() {
    const categories = [
        { title: "玄幻奇幻", input: BASE_URL + "class_1_1.html" },
        { title: "武侠仙侠", input: BASE_URL + "class_2_1.html" },
        { title: "现代都市", input: BASE_URL + "class_3_1.html" },
        { title: "历史军事", input: BASE_URL + "class_4_1.html" },
        { title: "科幻小说", input: BASE_URL + "class_5_1.html" },
        { title: "游戏竞技", input: BASE_URL + "class_6_1.html" },
        { title: "恐怖灵异", input: BASE_URL + "class_7_1.html" },
        { title: "言情小说", input: BASE_URL + "class_8_1.html" },
        { title: "动漫同人", input: BASE_URL + "class_9_1.html" },
        { title: "其他类型", input: BASE_URL + "class_10_1.html" },
        { title: "最近更新", input: BASE_URL, script: "gen.js" },
        { title: "排行榜", input: BASE_URL + "top/allvisit_1.html", script: "gen.js" }
    ];

    let genres = categories.map(cat => ({
        title: cat.title,
        input: cat.input,
        script: cat.script || "gen.js"
    }));

    return Response.success(genres);
}