load("config.js");

function execute(url) {
    let doc = fetch(url).html();
    let chapters = doc.select("#list-chapterAll dd");
    let data = [];

    chapters.forEach(e => {
        data.push({
            name: e.select("a").text(),
            url: e.select("a").attr("href")
        });
    });

    return Response.success(data);
}