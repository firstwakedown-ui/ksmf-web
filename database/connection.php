<?php
declare(strict_types=1);

function database(): PDO
{
    $databasePath = __DIR__ . '/ksmf.sqlite';

    if (!file_exists($databasePath)) {
        throw new RuntimeException('Chybí databáze. Spusťte jednou database/init.php přes PHP CLI.');
    }

    $pdo = new PDO('sqlite:' . $databasePath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}
