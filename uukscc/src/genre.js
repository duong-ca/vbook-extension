load('config.js'); 

function execute() {
    const BASE_URL = 'https://uukanshu.cc/';

    let doc = fetch(BASE_URL + "class_1_1.html").html();

    let genres = [];

    doc.select(".class ul li a").forEach(a => {
        let title = a.text();
        let input = a.attr("href");

        if (input.startsWith("/")) {
            input = BASE_URL + input.substring(1);
        }

        genres.push({
            title: title,
            input: input,
            script: "gen.js"
        });
    });

    return Response.success(genres);
}
