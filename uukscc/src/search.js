load("config.js");

function execute(key, page) {
    page = page || '1';

    // Xử lý key rỗng
    if (!key || key.trim() === '') return null;

    let url = `${BASE_URL}search/${encodeURIComponent(key)}_${page}.html`;
    let response = fetch(url);

    if (!response.ok) return null;

    let doc = response.html();

    let books = [];
    doc.select(".bookbox").forEach(book => {
        let link = book.select(".bookname a").attr("href");
        if (link) {
            books.push({
                name: book.select(".bookname").text(),
                link: link,
                description: book.select(".author .del_but").text().replace("作者：", ""),
                cover: book.select("img").attr("src"),
                host: BASE_URL
            });
        }
    });

    let next = "";
    let nextHref = doc.select(".next").first().attr("href");
    if (nextHref) {
        let match = nextHref.match(/_(\d+)\.html/);
        if (match) next = match[1];
    }

    return Response.success(books, next);
}