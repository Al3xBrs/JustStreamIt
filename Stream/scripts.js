const url_api = "http://localhost:8000/api/v1/titles/"

async function bestMovie() {
    let bestMovieRequest = await fetch(`${url_api}?sort_by=-imdb_score`);
    let bestMovieJson = await bestMovieRequest.json();

    let bestMovieInfoRequest = await fetch(`${url_api}${bestMovieJson.results[0].id}`);
    let bestMovieInfoJson = await bestMovieInfoRequest.json();

    let bm_img = document.querySelector(".one");
    let bm_title = document.querySelector(".two")
    let bm_desc = document.querySelector(".three")

    bm_img.innerHTML =`
        <img src = "${bestMovieInfoJson.image_url}" alt="${bestMovieInfoJson.title}"/>
    `;
    bm_title.innerHTML =`
        <h2>${bestMovieInfoJson.title}</h2>
    `;
    bm_desc.innerHTML =`
        <p>${bestMovieInfoJson.long_description}</p>
    `;
}

document.addEventListener("DOMContentLoaded", bestMovie)
