<?php
session_start();

if(isset($_SESSION['user'])){
    echo 'yes';
}
else {
    header('location : index.php');
}

?>