load("config.js");

function execute(url) {
    let doc = fetch(url).html();
    let content = doc.select(".readcotent").html();
    return Response.success(content);
}