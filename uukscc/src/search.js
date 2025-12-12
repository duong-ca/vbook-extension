load("config.js");

function execute(key, page) {
    page = page || '1';

    let url = `${BASE_URL}search/${encodeURIComponent(key)}_${page}.html`;
    let doc = fetch(url).html();

    let books = [];
    doc.select(".bookbox").forEach(book => {
        books.push({
            name: book.select(".bookname").text(),
            link: book.select(".bookname a").attr("href"),
            description: book.select(".author .del_but").text().replace("作者：", ""),
            cover: book.select("img").attr("src"),
            host: BASE_URL
        });
    });

    let next = "";
    let nextHref = doc.select(".next").first().attr("href");
    if (nextHref) {
        let match = nextHref.match(/_(\d+)\.html/);
        if (match) next = match[1];
    }

    return Response.success(books, next);
}