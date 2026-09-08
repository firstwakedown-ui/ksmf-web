<?php
declare(strict_types=1);

$databasePath = __DIR__ . '/ksmf.sqlite';
$schemaPath = __DIR__ . '/schema.sql';

if (file_exists($databasePath)) {
    exit("Databáze už existuje: {$databasePath}\n");
}

$pdo = new PDO('sqlite:' . $databasePath);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec((string) file_get_contents($schemaPath));

echo "Databáze byla vytvořena: {$databasePath}\n";
