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

async function genreSciFi() {

    let i = 1;
    const idList = [];
    while (i < 3){
        
        let SciFiMoviesRequest = await fetch(`${url_api}?genre=sci-fi&page=${i}`);
        let SciFiMoviesJson = await SciFiMoviesRequest.json();
        let SciFiMoviesResultsJson = SciFiMoviesJson.results;
        for (result in SciFiMoviesResultsJson){
            idList.push(SciFiMoviesResultsJson[result].id);
        }
        i ++;
    }

    let n = 0;
    while (n<8) {
        let MovieInfoRequest = await fetch(`${url_api}${idList[n]}`);
        let MovieInfoJson = await MovieInfoRequest.json();
        let MovieImg = document.querySelector(`.scifiMovie${n+1}`);
        // let MovieTitle = document.querySelector(".bestMovieTitle")
        // let MovieDesc = document.querySelector(".bestMovieDesc")

        // Add on the html file
        MovieImg.innerHTML =`
            <img src = "${MovieInfoJson.image_url}" title="${MovieInfoJson.title}"/>
        `;
        n++;
    }
}

async function genreAction() {

    let i = 1;
    const idList = [];
    while (i < 3){
        
        let actionMoviesRequest = await fetch(`${url_api}?genre=action&page=${i}`);
        let actionMoviesJson = await actionMoviesRequest.json();
        let actionMoviesResultsJson = actionMoviesJson.results;
        for (result in actionMoviesResultsJson){
            idList.push(actionMoviesResultsJson[result].id);
        }
        i ++;
    }

    let n = 0;
    while (n<8) {
        let MovieInfoRequest = await fetch(`${url_api}${idList[n]}`);
        let MovieInfoJson = await MovieInfoRequest.json();
        let MovieImg = document.querySelector(`.actionMovie${n+1}`);
        // let MovieTitle = document.querySelector(".bestMovieTitle")
        // let MovieDesc = document.querySelector(".bestMovieDesc")

        // Add on the html file
        MovieImg.innerHTML =`
            <img src = "${MovieInfoJson.image_url}" title="${MovieInfoJson.title}"/>
        `;
        n++;
    }
}

async function genreAdventure() {

    let i = 1;
    const idList = [];
    while (i < 3){
        
        let adventureMoviesRequest = await fetch(`${url_api}?genre=adventure&page=${i}`);
        let adventureMoviesJson = await adventureMoviesRequest.json();
        let adventureMoviesResultsJson = adventureMoviesJson.results;
        for (result in adventureMoviesResultsJson){
            idList.push(adventureMoviesResultsJson[result].id);
        }
        i ++;
    }

    let n = 0;
    while (n<8) {
        let MovieInfoRequest = await fetch(`${url_api}${idList[n]}`);
        let MovieInfoJson = await MovieInfoRequest.json();
        let MovieImg = document.querySelector(`.adventureMovie${n+1}`);
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
document.addEventListener("DOMContentLoaded", genreAction)
document.addEventListener("DOMContentLoaded", genreSciFi)
document.addEventListener("DOMContentLoaded", genreAdventure)
