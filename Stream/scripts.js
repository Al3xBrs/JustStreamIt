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
    let bestMovieImgDial = document.querySelector("#bestMovieImgDial");
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
    bestMovieImgDial.innerHTML =`
    <img src = "${bestMovieInfoJson.image_url}" title="${bestMovieInfoJson.title}"/>
    `;
    bestMovieTitle.innerHTML =`
        <h2>${bestMovieInfoJson.title}</h2>
    `;
    bestMovieDesc.innerHTML =`
        <p><span>${bestMovieInfoJson.description}</p>
    `;
    bestMovieGenre.innerHTML =`
        <p><span>Genres</span> : ${bestMovieInfoJson.genres}</p>
    `;
    bestMovieOutDate.innerHTML =`
        <p><span>Date de publication</span> : ${bestMovieInfoJson.date_published}</p>
    `;
    bestMovieRated.innerHTML =`
        <p><span>Notation</span> : ${bestMovieInfoJson.rated}</p>
    `;
    bestMovieScoreImdb.innerHTML =`
        <p><span>Score IMDB</span> : ${bestMovieInfoJson.imdb_score}</p>
    `;
    bestMovieReal.innerHTML =`
        <p><span>Réalisateur</span> : ${bestMovieInfoJson.directors}</p>
    `;
    bestMovieActors.innerHTML =`
        <p><span>Acteurs</span> : ${bestMovieInfoJson.actors}</p>
    `;
    bestMovieDuration.innerHTML =`
        <p><span>Durée</span> : ${bestMovieInfoJson.duration} min</p>
    `;
    bestMovieOriginCountry.innerHTML =`
        <p><span>Pays d'origine</span> : ${bestMovieInfoJson.countries}</p>
    `;
    bestMovieBOResult.innerHTML =`
        <p><span>Résultat du Box Office</span> : ${bestMovieInfoJson.worldwide_gross_income}</p>
    `;
    bestMovieSummary.innerHTML =`
        <p><span>Résumé</span> : ${bestMovieInfoJson.long_description}</p>
    `;

    // Catch 2nd to 7th best movie
    let n = 1;
    while (n<8) {
        let MovieInfoRequest = await fetch(`${url_api}${idList[n]}`);
        let MovieInfoJson = await MovieInfoRequest.json();
        let MovieImg = document.querySelector(`#bestMovie${n+1}`);
        let MovieImgDial = document.querySelector(`#bestMovie${n+1}ImgDial`);
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
        MovieImgDial.innerHTML =`
        <img src="${MovieInfoJson.image_url}" title="${MovieInfoJson.title}" style="cursor: pointer;"/>
        `;
        
        MovieGenre.innerHTML =`
            <p><span>Genres</span> : ${MovieInfoJson.genres}</p>
        `;
        MovieOutDate.innerHTML =`
            <p><span>Date de publication</span> : ${MovieInfoJson.date_published}</p>
        `;
        MovieRated.innerHTML =`
            <p><span>Notation</span> : ${MovieInfoJson.rated}</p>
        `;
        MovieScoreImdb.innerHTML =`
            <p><span>Score IMDB</span> : ${MovieInfoJson.imdb_score}</p>
        `;
        MovieReal.innerHTML =`
            <p><span>Réalisateur</span> : ${MovieInfoJson.directors}</p>
        `;
        MovieActors.innerHTML =`
            <p><span>Acteurs</span> : ${MovieInfoJson.actors}</p>
        `;
        MovieDuration.innerHTML =`
            <p><span>Durée</span> : ${MovieInfoJson.duration} min</p>
        `;
        MovieOriginCountry.innerHTML =`
            <p><span>Pays d'origine</span> : ${MovieInfoJson.countries}</p>
        `;
        MovieBOResult.innerHTML =`
            <p><span>Résultat du Box Office</span> : ${MovieInfoJson.worldwide_gross_income}</p>
        `;
        MovieSummary.innerHTML =`
            <p><span>Résumé</span> : ${MovieInfoJson.long_description}</p>
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
        let MovieImg = document.querySelector(`#scifiMovie${n+1}`);
        let MovieImgDial = document.querySelector(`#scifiMovie${n+1}ImgDial`);
        let MovieGenre = document.querySelector(`#scifiMovie${n+1}Genre`);
        let MovieOutDate = document.querySelector(`#scifiMovie${n+1}OutDate`);
        let MovieRated = document.querySelector(`#scifiMovie${n+1}Rated`);
        let MovieScoreImdb = document.querySelector(`#scifiMovie${n+1}ScoreImdb`);
        let MovieReal = document.querySelector(`#scifiMovie${n+1}Real`);
        let MovieActors = document.querySelector(`#scifiMovie${n+1}Actors`);
        let MovieDuration = document.querySelector(`#scifiMovie${n+1}Duration`);
        let MovieOriginCountry = document.querySelector(`#scifiMovie${n+1}OriginCountry`);
        let MovieBOResult = document.querySelector(`#scifiMovie${n+1}BOResult`);
        let MovieSummary = document.querySelector(`#scifiMovie${n+1}Summary`);

        // Add on the html file
        MovieImg.innerHTML =`
            <img src="${MovieInfoJson.image_url}" title="${MovieInfoJson.title}" style="cursor: pointer;"/>
        `;
        MovieImgDial.innerHTML =`
        <img src="${MovieInfoJson.image_url}" title="${MovieInfoJson.title}" style="cursor: pointer;"/>
        `;
        
        MovieGenre.innerHTML =`
            <p><span>Genres</span> : ${MovieInfoJson.genres}</p>
        `;
        MovieOutDate.innerHTML =`
            <p><span>Date de publication</span> : ${MovieInfoJson.date_published}</p>
        `;
        MovieRated.innerHTML =`
            <p><span>Notation</span> : ${MovieInfoJson.rated}</p>
        `;
        MovieScoreImdb.innerHTML =`
            <p><span>Score IMDB</span> : ${MovieInfoJson.imdb_score}</p>
        `;
        MovieReal.innerHTML =`
            <p><span>Réalisateur</span> : ${MovieInfoJson.directors}</p>
        `;
        MovieActors.innerHTML =`
            <p><span>Acteurs</span> : ${MovieInfoJson.actors}</p>
        `;
        MovieDuration.innerHTML =`
            <p><span>Durée</span> : ${MovieInfoJson.duration} min</p>
        `;
        MovieOriginCountry.innerHTML =`
            <p><span>Pays d'origine</span> : ${MovieInfoJson.countries}</p>
        `;
        MovieBOResult.innerHTML =`
            <p><span>Résultat du Box Office</span> : ${MovieInfoJson.worldwide_gross_income}</p>
        `;
        MovieSummary.innerHTML =`
            <p><span>Résumé</span> : ${MovieInfoJson.long_description}</p>
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
        let MovieImg = document.querySelector(`#actionMovie${n+1}`);
        let MovieImgDial = document.querySelector(`#actionMovie${n+1}ImgDial`);
        let MovieGenre = document.querySelector(`#actionMovie${n+1}Genre`);
        let MovieOutDate = document.querySelector(`#actionMovie${n+1}OutDate`);
        let MovieRated = document.querySelector(`#actionMovie${n+1}Rated`);
        let MovieScoreImdb = document.querySelector(`#actionMovie${n+1}ScoreImdb`);
        let MovieReal = document.querySelector(`#actionMovie${n+1}Real`);
        let MovieActors = document.querySelector(`#actionMovie${n+1}Actors`);
        let MovieDuration = document.querySelector(`#actionMovie${n+1}Duration`);
        let MovieOriginCountry = document.querySelector(`#actionMovie${n+1}OriginCountry`);
        let MovieBOResult = document.querySelector(`#actionMovie${n+1}BOResult`);
        let MovieSummary = document.querySelector(`#actionMovie${n+1}Summary`);

        // Add on the html file
        MovieImg.innerHTML =`
            <img src="${MovieInfoJson.image_url}" title="${MovieInfoJson.title}" style="cursor: pointer;"/>
        `;

        MovieImgDial.innerHTML =`
        <img src="${MovieInfoJson.image_url}" title="${MovieInfoJson.title}" style="cursor: pointer;"/>
        `;
        
        MovieGenre.innerHTML =`
            <p><span>Genres</span> : ${MovieInfoJson.genres}</p>
        `;
        MovieOutDate.innerHTML =`
            <p><span>Date de publication</span> : ${MovieInfoJson.date_published}</p>
        `;
        MovieRated.innerHTML =`
            <p><span>Notation</span> : ${MovieInfoJson.rated}</p>
        `;
        MovieScoreImdb.innerHTML =`
            <p><span>Score IMDB</span> : ${MovieInfoJson.imdb_score}</p>
        `;
        MovieReal.innerHTML =`
            <p><span>Réalisateur</span> : ${MovieInfoJson.directors}</p>
        `;
        MovieActors.innerHTML =`
            <p><span>Acteurs</span> : ${MovieInfoJson.actors}</p>
        `;
        MovieDuration.innerHTML =`
            <p><span>Durée</span> : ${MovieInfoJson.duration} min</p>
        `;
        MovieOriginCountry.innerHTML =`
            <p><span>Pays d'origine</span> : ${MovieInfoJson.countries}</p>
        `;
        MovieBOResult.innerHTML =`
            <p><span>Résultat du Box Office</span> : ${MovieInfoJson.worldwide_gross_income}</p>
        `;
        MovieSummary.innerHTML =`
            <p><span>Résumé</span> : ${MovieInfoJson.long_description}</p>
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
        let MovieImg = document.querySelector(`#adventureMovie${n+1}`);
        let MovieImgDial = document.querySelector(`#adventureMovie${n+1}ImgDial`);
        let MovieGenre = document.querySelector(`#adventureMovie${n+1}Genre`);
        let MovieOutDate = document.querySelector(`#adventureMovie${n+1}OutDate`);
        let MovieRated = document.querySelector(`#adventureMovie${n+1}Rated`);
        let MovieScoreImdb = document.querySelector(`#adventureMovie${n+1}ScoreImdb`);
        let MovieReal = document.querySelector(`#adventureMovie${n+1}Real`);
        let MovieActors = document.querySelector(`#adventureMovie${n+1}Actors`);
        let MovieDuration = document.querySelector(`#adventureMovie${n+1}Duration`);
        let MovieOriginCountry = document.querySelector(`#adventureMovie${n+1}OriginCountry`);
        let MovieBOResult = document.querySelector(`#adventureMovie${n+1}BOResult`);
        let MovieSummary = document.querySelector(`#adventureMovie${n+1}Summary`);

        // Add on the html file
        MovieImg.innerHTML =`
            <img src="${MovieInfoJson.image_url}" title="${MovieInfoJson.title}" style="cursor: pointer;"/>
        `;
        
        MovieImgDial.innerHTML =`
        <img src="${MovieInfoJson.image_url}" title="${MovieInfoJson.title}" style="cursor: pointer;"/>
        `;

        MovieGenre.innerHTML =`
            <p><span>Genres</span> : ${MovieInfoJson.genres}</p>
        `;
        MovieOutDate.innerHTML =`
            <p><span>Date de publication</span> : ${MovieInfoJson.date_published}</p>
        `;
        MovieRated.innerHTML =`
            <p><span>Notation</span> : ${MovieInfoJson.rated}</p>
        `;
        MovieScoreImdb.innerHTML =`
            <p><span>Score IMDB</span> : ${MovieInfoJson.imdb_score}</p>
        `;
        MovieReal.innerHTML =`
            <p><span>Réalisateur</span> : ${MovieInfoJson.directors}</p>
        `;
        MovieActors.innerHTML =`
            <p><span>Acteurs</span> : ${MovieInfoJson.actors}</p>
        `;
        MovieDuration.innerHTML =`
            <p><span>Durée</span> : ${MovieInfoJson.duration} min</p>
        `;
        MovieOriginCountry.innerHTML =`
            <p><span>Pays d'origine</span> : ${MovieInfoJson.countries}</p>
        `;
        MovieBOResult.innerHTML =`
            <p><span>Résultat du Box Office</span> : ${MovieInfoJson.worldwide_gross_income}</p>
        `;
        MovieSummary.innerHTML =`
            <p><span>Résumé</span> : ${MovieInfoJson.long_description}</p>
        `;

        n++;
    }
}
// Wait untill website is ok before to run the function
document.addEventListener("DOMContentLoaded", bestMovies)
document.addEventListener("DOMContentLoaded", genreAction)
document.addEventListener("DOMContentLoaded", genreSciFi)
document.addEventListener("DOMContentLoaded", genreAdventure)
