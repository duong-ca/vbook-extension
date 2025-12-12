load('config.js');

function execute(url, page) {
    page = page || '1';

    if (page !== '1') {
        url = url.replace(/_(\d+)\.html/, `_${page}.html`);
    }

    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();
    let novels = [];

    doc.select(".bookbox").forEach(e => {
        novels.push({
            name: e.select(".bookname a").text(),
            link: e.select(".bookname a").attr("href"),
            description: e.select(".update").text().replace("簡介：", "").trim(),
            host: BASE_URL
        });
    });

    let next = "";
    let pageLink = doc.select(".next").first();
    if (pageLink && pageLink.attr("href") && pageLink.attr("href").includes(`_${parseInt(page) + 1}.html`)) {
        next = (parseInt(page) + 1).toString();
    }

    return Response.success(novels, next);
}