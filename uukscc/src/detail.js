load("config.js");

function execute(url) {
    let doc = fetch(url).html();

    let booktag = doc.select(".booktag span");
    let tag = doc.select(".booktag a").text();

    booktag.forEach(e => {
        tag += "<br>" + e.text();
    });

    let authors = doc.select(".booktag a.red").first().text().replace("作者：", "");

    return Response.success({
        name: doc.select("h1.booktitle").text(),
        cover: doc.select(".thumbnail").first().attr("src"),
        author: authors,
        description: doc.select(".bookintro").text(),
        detail: tag + "<br>" + doc.select(".booktime").text(),
        host: BASE_URL,
        suggests: [{
            title: "Cùng tác giả",
            input: "/modules/article/authorarticle.php?author=" + authors,
            script: "gen.js"
        }],
        ongoing: doc.select(".booktag").text().includes("連載")
    });
}