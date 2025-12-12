load("config.js");

function execute(key, page) {
    if (!page) page = '1';

    let url = BASE_URL + "search/" + encodeURIComponent(key) + "_" + page + ".html";
    let response = fetch(url);

    if (!response.ok) return null;

    let doc = response.html();
    let novelList = [];

    doc.select(".bookbox").forEach(e => {
        novelList.push({
            name: e.select(".bookname a").text(),
            link: e.select(".bookname a").attr("href"),
            description: e.select(".author").first()?.text() || "",
            host: BASE_URL
        });
    });

    let next = "";
    let nextBtn = doc.select(".next").first();
    if (nextBtn && nextBtn.attr("href")) {
        let match = nextBtn.attr("href").match(/_(\d+)\.html/);
        if (match) next = match[1];
    }

    return Response.success(novelList, next);
}