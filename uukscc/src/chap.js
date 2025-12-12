load("config.js");

function execute(url) {
    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();
    let content = doc.select(".readcotent").html();

    return Response.success(content);
}