load("config.js");

function execute(key, page) {
    page = page || '1';

    // Xử lý key rỗng
    if (!key || key.trim() === '') return null;

    // Xây dựng URL tìm kiếm đúng định dạng
    let url;
    if (page === '1') {
        url = `${BASE_URL}search/${encodeURIComponent(key)}/1.html`;
    } else {
        url = `${BASE_URL}search/${encodeURIComponent(key)}_${page}.html`;
    }

    let response = fetch(url);

    if (!response.ok) return null;

    let doc = response.html();

    let books = [];
    // Xử lý cả 2 loại selector
    doc.select(".bookbox, .keywords .bookbox").forEach(book => {
        let link = book.select(".bookname a").attr("href") ||
            book.select("a.del_but").attr("href");

        if (link) {
            books.push({
                name: book.select(".bookname").text() || book.select("a[href^='/book/']").text(),
                link: link,
                description: book.select(".author").text() || book.select("a.del_but").text(),
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