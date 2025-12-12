load("config.js");

function execute(url) {
    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();
    let content = doc.select(".readcotent, .readcontent").html();

    if (!content) {
        content = doc.select(".readcotent bbb").html();
    }

    return Response.success(content);
}