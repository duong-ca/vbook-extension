load('config.js');

function execute(url, page) {
    page = page || '1';

    let pageUrl = url;
    if (page !== '1') {
        if (url.includes('_1.html')) {
            pageUrl = url.replace('_1.html', `_${page}.html`);
        } else if (!url.includes('_')) {
            if (url.endsWith('/')) {
                pageUrl = url + `${page}.html`;
            } else {
                pageUrl = url + `_${page}.html`;
            }
        }
    }

    let response = fetch(pageUrl);
    if (!response.ok) return null;

    let doc = response.html();
    let novels = [];

    if (doc.select(".bookbox").size() > 0) {
        doc.select(".bookbox").forEach(e => {
            novels.push({
                name: e.select(".bookname a").text() || e.select(".bookinfo .bookname a").text(),
                link: e.select(".bookname a").attr("href") || e.select(".bookinfo .bookname a").attr("href"),
                description: e.select(".update").text().replace("簡介：", "").trim() ||
                    e.select(".author").first()?.text() || "",
                host: BASE_URL
            });
        });
    } else if (doc.select(".item").size() > 0) {
        doc.select(".item").forEach(e => {
            novels.push({
                name: e.select("dt a").text(),
                link: e.select("dt a").attr("href"),
                description: e.select("dd").text().trim(),
                host: BASE_URL
            });
        });
    }

    let next = "";
    let nextLink = doc.select(".next").first();
    if (nextLink && nextLink.attr("href")) {
        let href = nextLink.attr("href");
        let match = href.match(/_(\d+)\.html/);
        if (match) {
            next = match[1];
        } else if (href.includes('.html')) {
            match = href.match(/(\d+)\.html/);
            if (match) next = match[1];
        }
    }

    return Response.success(novels, next);
}