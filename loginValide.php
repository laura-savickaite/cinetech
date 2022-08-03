<?php
require 'bdd-connect.php';

$login = $_POST['login'];

$loginSubmit=$pdo -> prepare('SELECT `login` FROM `utilisateurs` WHERE `login`=:login');
$loginSubmit -> execute(['login' => $login]);
$result = $loginSubmit->fetch(PDO::FETCH_ASSOC);


if($result['login'] == $login){
    echo '0';
}else{
    echo true;
}

// echo json_encode($_POST['email']);
?>