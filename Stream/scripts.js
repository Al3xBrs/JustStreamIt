const url_api = "http://localhost:8000/api/v1/titles/"

async function bestMovies() {

    // Catch all the best movies
    let i = 1;
    const idList = [];
    while (i < 3){
        
        let bestMoviesRequest = await fetch(`${url_api}?sort_by=-imdb_score&page=${i}`);
        let bestMoviesJson = await bestMoviesRequest.json();
        let bestMoviesResultsJson = bestMoviesJson.results;
        for (result in bestMoviesResultsJson){
            idList.push(bestMoviesResultsJson[result].id);
        }
        i ++;
    }

    // Catch the first best movie
    let bestMovieInfoRequest = await fetch(`${url_api}${idList[0]}`);
    let bestMovieInfoJson = await bestMovieInfoRequest.json();
    let bestMovieImg = document.querySelector(".bestMovieImg");
    let bestMovieTitle = document.querySelector(".bestMovieTitle")
    let bestMovieDesc = document.querySelector(".bestMovieDesc")
    // Add on the html file
    bestMovieImg.innerHTML =`
        <img src = "${bestMovieInfoJson.image_url}" title="${bestMovieInfoJson.title}"/>
    `;
    bestMovieTitle.innerHTML =`
        <h2>${bestMovieInfoJson.title}</h2>
    `;
    bestMovieDesc.innerHTML =`
        <p>${bestMovieInfoJson.long_description}</p>
    `;

    // Catch 2nd to 7th best movie
    let n = 1;
    while (n<8) {
        let MovieInfoRequest = await fetch(`${url_api}${idList[n]}`);
        let MovieInfoJson = await MovieInfoRequest.json();
        let MovieImg = document.querySelector(`.bestMovie${n+1}`);
        // let MovieTitle = document.querySelector(".bestMovieTitle")
        // let MovieDesc = document.querySelector(".bestMovieDesc")
        // Add on the html file
        MovieImg.innerHTML =`
            <img src = "${MovieInfoJson.image_url}" title="${MovieInfoJson.title}"/>
        `;
        n++;
    }
}

// Wait untill website is ok before to run the function
document.addEventListener("DOMContentLoaded", bestMovies)
