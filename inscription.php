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
        <label for="login">Login :</label>
                    <input type="text" id="login" name="login">
                    <p class="error"></p>
        <label for="msg">Password :</label>
            <input type="password" id="pass" name="password" required>
            <p>Le mot de passe doit avoir au moins 8 caractères, au moins une minuscule, une majuscule, un nombre et un caractère spécial.</p>
            <p class="error"></p>
        <label for="msg">Confirmation du mot de passe :</label>
            <input type="password" id="pass2" name="password2" required>
            <p class="error"></p>
            
        <button id='submit' name="inscription">Sign in</button>        
    </main>
    
</body>
</html>