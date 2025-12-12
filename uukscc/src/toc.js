load("config.js");

function execute(url) {
    if (!url.includes('uukanshu.cc')) {
        url = BASE_URL + 'book/' + url.replace(/^\//, '');
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
                url: chapterUrl.includes('uukanshu.cc') ? chapterUrl : BASE_URL + chapterUrl.replace(/^\//, '')
            });
        }
    });

    return Response.success(data);
}