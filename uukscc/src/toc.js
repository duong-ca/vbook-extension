load("config.js");

function execute(url) {
    if (!url.startsWith('http')) {
        url = BASE_URL + 'book/' + url.replace(/^\//, '').replace(/\/$/, '');
    }
    if (!url.endsWith('/')) {
        url = url + '/';
    }

    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();
    let chapters = doc.select("#list-chapterAll dd");
    let data = [];

    chapters.forEach(e => {
        let chapterUrl = e.select("a").attr("href");
        if (chapterUrl) {
            data.push({
                name: e.select("a").text(),
                url: chapterUrl.startsWith('http') ? chapterUrl : BASE_URL + chapterUrl.replace(/^\//, '')
            });
        }
    });

    return Response.success(data);
}