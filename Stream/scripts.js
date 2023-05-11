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
    let bestMovieImg = document.querySelector("#bestMovieImg");
    let bestMovieTitle = document.querySelector("#bestMovieTitle");
    let bestMovieDesc = document.querySelector("#bestMovieDesc");
    let bestMovieGenre = document.querySelector("#bestMovieGenre");
    let bestMovieOutDate = document.querySelector("#bestMovieOutDate");
    let bestMovieRated = document.querySelector("#bestMovieRated");
    let bestMovieScoreImdb = document.querySelector("#bestMovieScoreImdb");
    let bestMovieReal = document.querySelector("#bestMovieReal");
    let bestMovieActors = document.querySelector("#bestMovieActors");
    let bestMovieDuration = document.querySelector("#bestMovieDuration");
    let bestMovieOriginCountry = document.querySelector("#bestMovieOriginCountry");
    let bestMovieBOResult = document.querySelector("#bestMovieBOResult");
    let bestMovieSummary = document.querySelector("#bestMovieSummary");
    
    // Add on the html file

    bestMovieImg.innerHTML =`
        <img src = "${bestMovieInfoJson.image_url}" title="${bestMovieInfoJson.title}" class="more-button"/>
    `;
    bestMovieTitle.innerHTML =`
        <h2>${bestMovieInfoJson.title}</h2>
    `;
    bestMovieDesc.innerHTML =`
        <p>${bestMovieInfoJson.description}</p>
    `;
    bestMovieGenre.innerHTML =`
        <p>Genres : ${bestMovieInfoJson.genres}</p>
    `;
    bestMovieOutDate.innerHTML =`
        <p>Date de publication : ${bestMovieInfoJson.date_published}</p>
    `;
    bestMovieRated.innerHTML =`
        <p>Notation : ${bestMovieInfoJson.rated}</p>
    `;
    bestMovieScoreImdb.innerHTML =`
        <p>Score IMDB : ${bestMovieInfoJson.imdb_score}</p>
    `;
    bestMovieReal.innerHTML =`
        <p>Réalisateur : ${bestMovieInfoJson.directors}</p>
    `;
    bestMovieActors.innerHTML =`
        <p>Acteurs : ${bestMovieInfoJson.actors}</p>
    `;
    bestMovieDuration.innerHTML =`
        <p>Durée : ${bestMovieInfoJson.duration} min</p>
    `;
    bestMovieOriginCountry.innerHTML =`
        <p>Pays d'origine : ${bestMovieInfoJson.countries}</p>
    `;
    bestMovieBOResult.innerHTML =`
        <p>Résultat du Box Office : ${bestMovieInfoJson.worldwide_gross_income}</p>
    `;
    bestMovieSummary.innerHTML =`
        <p>Résumé : ${bestMovieInfoJson.long_description}</p>
    `;

    // Catch 2nd to 7th best movie
    let n = 1;
    while (n<8) {
        let MovieInfoRequest = await fetch(`${url_api}${idList[n]}`);
        let MovieInfoJson = await MovieInfoRequest.json();
        let MovieImg = document.querySelector(`#bestMovie${n+1}`);
        let MovieGenre = document.querySelector(`#bestMovie${n+1}Genre`);
        let MovieOutDate = document.querySelector(`#bestMovie${n+1}OutDate`);
        let MovieRated = document.querySelector(`#bestMovie${n+1}Rated`);
        let MovieScoreImdb = document.querySelector(`#bestMovie${n+1}ScoreImdb`);
        let MovieReal = document.querySelector(`#bestMovie${n+1}Real`);
        let MovieActors = document.querySelector(`#bestMovie${n+1}Actors`);
        let MovieDuration = document.querySelector(`#bestMovie${n+1}Duration`);
        let MovieOriginCountry = document.querySelector(`#bestMovie${n+1}OriginCountry`);
        let MovieBOResult = document.querySelector(`#bestMovie${n+1}BOResult`);
        let MovieSummary = document.querySelector(`#bestMovie${n+1}Summary`);

        // Add on the html file
        MovieImg.innerHTML =`
            <img src="${MovieInfoJson.image_url}" title="${MovieInfoJson.title}" style="cursor: pointer;"/>
        `;
        
        MovieGenre.innerHTML =`
            <p>Genres : ${MovieInfoJson.genres}</p>
        `;
        MovieOutDate.innerHTML =`
            <p>Date de publication : ${MovieInfoJson.date_published}</p>
        `;
        MovieRated.innerHTML =`
            <p>Notation : ${MovieInfoJson.rated}</p>
        `;
        MovieScoreImdb.innerHTML =`
            <p>Score IMDB : ${MovieInfoJson.imdb_score}</p>
        `;
        MovieReal.innerHTML =`
            <p>Réalisateur : ${MovieInfoJson.directors}</p>
        `;
        MovieActors.innerHTML =`
            <p>Acteurs : ${MovieInfoJson.actors}</p>
        `;
        MovieDuration.innerHTML =`
            <p>Durée : ${MovieInfoJson.duration} min</p>
        `;
        MovieOriginCountry.innerHTML =`
            <p>Pays d'origine : ${MovieInfoJson.countries}</p>
        `;
        MovieBOResult.innerHTML =`
            <p>Résultat du Box Office : ${MovieInfoJson.worldwide_gross_income}</p>
        `;
        MovieSummary.innerHTML =`
            <p>Résumé : ${MovieInfoJson.long_description}</p>
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
