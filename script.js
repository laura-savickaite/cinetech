document.addEventListener('DOMContentLoaded', function loaded() {

    "use strict";

    let div = document.getElementById("test");

    const accessToken = "53fbaddd3a0baa338fe10e92c6b34044";

    const accessUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${accessToken}&language=en-US`;

    const fetchGenres = () => {

        try {

            // const response = await fetch(accessUrl)
            // const {data} = await response.json()

            // console.log(data);
            fetch(accessUrl)
            .then(response => response.json())
            .then((response) => {
                let genres = response.genres;

                //faire une fonction de ça : 
                let listMovies = document.createElement('ul');
                genres.forEach(element => {

                    let nameGenre = element.name
                    let idGenre = element.id

                    let aListViewMovies = document.createElement('a');
                    let listViewMovies = document.createElement('li');
                    aListViewMovies.setAttribute("id", idGenre)

                    aListViewMovies.href = "http://localhost:8080/cinetech/movies.php?val="+idGenre
                    listViewMovies.innerHTML = nameGenre

                    listMovies.appendChild(aListViewMovies); 
                    aListViewMovies.appendChild(listViewMovies);

                    test.appendChild(listMovies);

                    console.log(element)
                    // console.log(element.name)
                    // console.log(element.id)

                });
                
                // for(let i = 0; )
            } 
            )

        } catch (error) {
            console.error(error);
        }
    }

    fetchGenres();


    //INSCRIPTION 

    let data = new FormData()

    let login = document.getElementById('login');
    let pass = document.getElementById('pass');
    let pass2 = document.getElementById('pass2');

    
})