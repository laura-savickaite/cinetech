<?php
    $host='localhost';
    $user='root';
    $password='';
    $dbname='cinetech';

    $dsn='mysql:host='.$host.'; dbname='.$dbname.'; charset=utf8';

    $pdo=new PDO($dsn, $user, $password);

    // $host='localhost';
    // $user='laura-savickaite';
    // $password='laurasavickaite1997';
    // $dbname='laura-savickaite_memory';

    // $dsn='mysql:host='.$host.'; dbname='.$dbname.'; charset=utf8';

    // $pdo=new PDO($dsn, $user, $password);
?>