load("config.js");

function execute(url) {
    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();
    let content = doc.select(".readcotent").html();

    if (!content) {
        content = doc.select("div[class*='content']").html() ||
            doc.select("div[class*='text']").html() ||
            "Nội dung chương không tìm thấy";
    }

    return Response.success(content);
}