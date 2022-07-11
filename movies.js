document.addEventListener('DOMContentLoaded', function loaded() {

    "use strict";

    const accessToken = "53fbaddd3a0baa338fe10e92c6b34044";

    //attraper l'url et ses valeurs
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('val');
    // console.log(id)

    const accessUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${accessToken}&with_genres=${id}`;

    const getUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${accessToken}&language=en-US`;

    const Url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${accessToken}&language=en-US&page=1`;

    let moviesList = document.getElementById("moviesList");

    
    const fetchMovies = () => {

        try {

            fetch(accessUrl)
            .then(response => response.json())
            .then((response) => {

                let results = response.results;
                console.log(results);
                
                results.forEach(element => {
                    let urlPoster = element.backdrop_path;
                    let urlIdMovie = element.id;
                    let ogtitleMovie = element.original_title

                    let aListMovies = document.createElement("a");
                    aListMovies.href = "http://localhost:8080/cinetech/movie.php?val="+urlIdMovie

                    let posterMovie = document.createElement("img");
                    posterMovie.setAttribute("src", "https://image.tmdb.org/t/p/w500/"+urlPoster)
                    aListMovies.appendChild(posterMovie);

                    let titleMovie = document.createElement("h3");
                    titleMovie.innerHTML = ogtitleMovie;
                    aListMovies.appendChild(titleMovie);

                    moviesList.appendChild(aListMovies)

                    moviesList.setAttribute("id", urlIdMovie);

                });
            } 
            )

        } catch (error) {
            console.error(error);
        }
    }
    fetchMovies();


    const fetchMovie = () => {
        try {
            fetch(getUrl) 
            .then(response => response.json())
            .then(response => {
                console.log(response);

                let truc = document.getElementById("truc");

                let getMovieTitle = response.original_title;
                let getMoviePoster = response.backdrop_path;
                let getMovieOverview = response.overview;
                let getReleaseDate = response.release_date;
                let getVote = response.vote_average;

                let moviePoster = document.createElement("img");
                    moviePoster.setAttribute("src", "https://image.tmdb.org/t/p/w500/"+getMoviePoster)
                    truc.appendChild(moviePoster);
                
                let movieTitle = document.createElement("h2");
                    movieTitle.innerHTML = getMovieTitle;
                    truc.appendChild(movieTitle)

                let movieOverview = document.createElement("p");
                    movieOverview.classList.add("overview");
                    movieOverview.innerHTML = getMovieOverview;
                    truc.appendChild(movieOverview);

                let releaseDate = document.createElement("p");
                    releaseDate.classList.add("date");
                    releaseDate.innerHTML = getReleaseDate;
                    truc.appendChild(releaseDate);

                let vote = document.createElement("p");
                    vote.classList.add("vote");
                    vote.innerHTML = getVote;
                    truc.appendChild(vote)
                
                // console.log(getMovieTitle);
            })
        }
        catch (error) {
            console.error(error);
        }
    }
    fetchMovie();


    const fetchSimilarMovies = () => {
        try {

            fetch(Url)
            .then(response => response.json())
            .then((response) => {
                // console.log(response)
                let similar = response.results;

                similar.forEach(element => {
                    let getSimilarPoster = element.backdrop_path;
                    let getSimilarTitle = element.title;
                    let getSimilarID = element.id;

                    let similarMovieList = document.getElementById("similar");

                    let aSimilarList = document.createElement("a");
                        aSimilarList.href = "http://localhost:8080/cinetech/movie.php?val="+getSimilarID

                    let similarMoviePoster = document.createElement("img");
                        similarMoviePoster.setAttribute("src", "https://image.tmdb.org/t/p/w500/"+getSimilarPoster)
                        aSimilarList.appendChild(similarMoviePoster);

                    let similarMovieTitle = document.createElement("h2");
                        similarMovieTitle.innerHTML = getSimilarTitle;
                        aSimilarList.appendChild(similarMovieTitle)

                    similarMovieList.appendChild(aSimilarList);
                });
            })
        }
        catch(error) {
            console.error(error);
        }
    }
    fetchSimilarMovies();
})