load("config.js");

function execute(url) {
    if (!url.startsWith('http')) {
        url = BASE_URL + 'book/' + url.replace(/^\//, '').replace(/\/$/, '');
    }

    if (!url.endsWith('/')) {
        url = url + '/';
    }

    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();

    let info = doc.select(".bookinfo");
    if (!info) return null;

    let booktag = doc.select(".booktag span");
    let tag = doc.select(".booktag a").text();

    booktag.forEach(e => {
        tag += "<br>" + e.text();
    });

    let authors = doc.select(".booktag a.red").first().text().replace("作者：", "");

    return Response.success({
        name: info.select("h1.booktitle").text(),
        cover: doc.select(".thumbnail").first().attr("src"),
        author: authors,
        description: info.select(".bookintro").text(),
        detail: tag + "<br>" + info.select(".booktime").text(),
        host: BASE_URL,
        suggests: [{
            title: "Cùng tác giả",
            input: doc.select(".booktag a.red").first().attr("href"),
            script: "gen.js"
        }],
        ongoing: doc.select(".booktag").text().includes("連載")
    });
}