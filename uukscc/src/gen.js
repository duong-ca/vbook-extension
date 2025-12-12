load("config.js");

function execute(url, page) {
    page = page || '1';

    let pageUrl;

    if (url.includes('_')) {
        pageUrl = url.replace(/_(\d+)\.html/, `_${page}.html`);
    } else if (url.endsWith('/')) {
        pageUrl = `${url}${page}.html`;
    } else {
        pageUrl = `${url}_${page}.html`;
    }

    if (!pageUrl.startsWith('http')) {
        pageUrl = BASE_URL + pageUrl.replace(/^\//, '');
    }

    let response = fetch(pageUrl);
    if (!response.ok) return null;

    let doc = response.html();

    let books = [];
    doc.select(".bookbox").forEach(book => {
        let link = book.select(".bookname a").attr("href") ||
            book.select("a.del_but").attr("href");

        if (link) {
            books.push({
                name: book.select(".bookname").text(),
                link: link,
                description: book.select(".author").text() || "Không có mô tả",
                cover: book.select("img").attr("src"),
                host: BASE_URL
            });
        }
    });

    let next = "";
    let nextHref = doc.select(".next").first().attr("href");
    if (nextHref) {
        let match = nextHref.match(/[_-](\d+)\.html/);
        if (match) next = match[1];
    }

    return Response.success(books, next);
}