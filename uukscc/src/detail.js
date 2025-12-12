load("config.js");

function execute(url) {
    if (!url.includes('uukanshu.cc')) {
        if (url.startsWith('/')) {
            url = BASE_URL + url.substring(1);
        } else {
            url = BASE_URL + url;
        }
    }

    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();

    return Response.success({
        name: doc.select("h1.booktitle").text() || doc.select(".bookinfo h1").text(),
        cover: doc.select(".bookcover img").attr("src") ||
            doc.select(".book img.thumbnail").attr("src"),
        author: doc.select(".booktag > a.red").text().replace("作者：", "") ||
            doc.select(".booktag a[href*='author']").text(),
        description: doc.select(".bookintro").text().trim() ||
            doc.select(".bookinfo .bookintro").text().trim(),
        detail: doc.select(".booktag").text().replace(/\s+/g, " ").trim(),
        host: BASE_URL
    });
}