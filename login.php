<?php
require 'bdd-connect.php';
require_once 'connexion.php';

if(isset($_POST['connexion'])){

    if(! empty ($_POST['login'])){

        $login = $_POST['login'];

        $userSubmit=$pdo -> prepare('SELECT * FROM `utilisateurs` WHERE `login`=:login');
        $userSubmit -> execute(['login' => $login]);
        $result = $userSubmit->fetch(PDO::FETCH_ASSOC);

        if(! empty ($_POST['password'])){
            
            if($_POST['password'] === $result['password']){
                $_SESSION['user'] = 
                [
                    'id' => $result['id'],
                    'login' => $result['login'],
                    'password' => $result['password'],
                ];
                // var_dump($_SESSION['user']);
                // header ('location: index');
            }
            else {
                echo "L'identifiant ou le mot de passe sont erronés.";
            }
        }
    }
}

?>