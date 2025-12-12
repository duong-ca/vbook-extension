load("config.js");

function execute(url) {
    if (!url.includes('/book/')) {
        url = BASE_URL + 'book/' + url.match(/\d+/)[0];
    }

    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();

    return Response.success({
        name: doc.select("h1.booktitle").text(),
        cover: doc.select(".bookcover img").attr("src"),
        author: doc.select(".booktag > a.red").text().replace("作者：", ""),
        description: doc.select(".bookintro").text().trim(),
        detail: doc.select(".booktag").text().replace(/\s+/g, " ").trim(),
        host: BASE_URL
    });
}