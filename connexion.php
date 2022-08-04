<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" charset="utf-8"></script>
    <title>Cinetech</title>
</head>
<body>
    <nav>
        <ul>
            <li>Homepage</li>
            <li><a href="">Movies</a></li>
            <div id="test"></div>
            <li><a href="">TV Shows</a></li>
            <li><a href="inscription.php">Inscription</a></li>
            <li><a href="connexion.php">Connexion</a></li>
        </ul>
    </nav>

    <main>
        <form action="login.php" method="post">
            <label for="login">Login :</label>
                        <input type="text" id="log-in" name="login">
                        <p class="error"></p>
            <label for="msg">Password :</label>
                <input type="password" id="password" name="password" required>
                <p class="error"></p>
                
            <button id='log-in' name="connexion">Log in</button>               
        </form>
    </main>
</body>
</html>