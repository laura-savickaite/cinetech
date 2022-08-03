<?php
require 'bdd-connect.php';

$content = trim(file_get_contents("php://input"));

$data = json_decode($content, true);


$login = $data["login"];
$password = $data["password"];

$submit=$pdo -> prepare('INSERT INTO utilisateurs SET login=:login, password=:password');
$submit -> execute(['login' => $login, 'password' => $password]);

echo 'ok';

?>