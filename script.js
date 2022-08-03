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

    let validation;

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
                data.append('login',loginValue)

                fetch('loginValide.php',{
                    method: 'POST',
                    body: data
                })
                .then ((response) => response.text())
                .then ((response) => {
                    console.log(response)
                    if(response === '0')
                    {
                        error[0].style.display = 'block'
                        error[0].innerHTML = 'Ce login est déjà pris';
                        validation = false;
                    }
                    else 
                    {
                        error[0].style.display = 'none'
                        validation = true; 
                    }
                })  
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

    pass2.addEventListener('focusout', function(){
        let pass2Value = this.value;
        if(pass2Value === '')
        {
            error[4].style.display = 'block'
            error[4].innerHTML = 'Veuillez faire une confirmation de mot de passe';
            validation = false;
        }
        else 
        {
            if(pass2Value !== pass.value)
            {
                error[4].style.display = 'block'
                error[4].innerHTML = 'Le mot de passe et sa confirmation ne sont pas les mêmes';
                validation = false;
            }
            else 
            {
              error[4].style.display = 'none' 
              validation = true; 
              
            }
            
        }
    })

    submit.addEventListener('click', function(){

        if(validation !== true){
            console.log('ok');
        }
        else
        {
            fetch('signin.php',{
                method: 'POST',
                body: JSON.stringify({login: login.value, password: pass.value})
            })
            .then ((response) => response.text())
            .then ((response) => {
                console.log(response)
                // if(response === '0')
                // {
                //     error[2].style.display = 'block'
                //     error[2].innerHTML = 'Cet email est déjà pris';
                //     validation = false;
                // }
                // else 
                // {
                //     error[2].style.display = 'none'
                // }
            })
            .catch((error) => console.log(error)) 
        }
     })
})