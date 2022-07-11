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

    const regexmdp = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/

    let submit = document.getElementById('submit');
    let error = document.getElementsByClassName('error');

    login.addEventListener('keyup', function(){
        let loginValue = this.value;
        if(loginValue === '')
        {
            error[0].style.display = 'block'
            error[0].innerHTML = 'Veuillez rentrer un login';
            validation = false;
        }
        else 
        {
            error[0].style.display = 'none'  
            validation = true; 
        }
    })

    pass.addEventListener('focusout', function(){
        let passValue = this.value;

        const find = passValue.match(regexmdp);

        if(passValue === '')
        {
            error[1].style.display = 'block'
            error[1].innerHTML = 'Veuillez rentrer un mot de passe';
            validation = false;
        }
        else 
        {
            if(find === null)
            {
                error[1].style.display = 'block'
                error[1].innerHTML = 'Veuillez rentrer un mot de passe valide';
                validation = false;
            }
            else
            {
                error[1].style.display = 'none'
                validation = true; 
            } 
        }
    })

    
})