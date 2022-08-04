<?php session_start() ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="movies.js" charset="utf-8"></script>
    <title>Cinetech</title>
</head>
<body>
    <?php var_dump($_SESSION['user']) ?>
    <div id="truc"></div>

    <form action="" method="post">
        <input id="movieID" name="movieID" type="hidden" value="">
        <button id='favoris' name="fave">Favoris</button> 
    </form>

    
    <div id="similar"></div>
</body>
</html>