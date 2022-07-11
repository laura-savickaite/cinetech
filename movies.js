document.addEventListener('DOMContentLoaded', function loaded() {

    "use strict";

    const accessToken = "53fbaddd3a0baa338fe10e92c6b34044";

    //attraper l'url et ses valeurs
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idGenre = urlParams.get('val');

    const accessUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${accessToken}&with_genres=${idGenre}`;

    let test = document.getElementById("test");

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

                    test.appendChild(aListMovies)
                    
                    test.setAttribute("id", urlIdMovie);

                });
            } 
            )

        } catch (error) {
            console.error(error);
        }
    }

    fetchMovies();



})