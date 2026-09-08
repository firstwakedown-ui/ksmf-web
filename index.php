<?php
declare(strict_types=1);

require __DIR__ . '/database/connection.php';

$statement = database()->query('SELECT venue, map_url, starts_at, ends_at, price_text FROM event_information WHERE id = 1');
$information = $statement->fetch(PDO::FETCH_ASSOC);

if ($information === false) {
    throw new RuntimeException('V databázi chybí záznam s informacemi o akci.');
}

function escapeHtml(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'Windows-1250');
}

ob_start();
require __DIR__ . '/index.html';
$page = (string) ob_get_clean();

$informationSection = '<h2>Informace</h2>'
    . '<p><b>Místo konání: </b>' . escapeHtml($information['venue'])
    . ' (<a href="' . escapeHtml($information['map_url']) . '" target="_blank">mapa</a>)<br></p>'
    . '<p><b>Čas zahájení:</b> ' . escapeHtml($information['starts_at']) . '<br></p>'
    . '<p><b>Čas ukončení:</b> ' . escapeHtml($information['ends_at']) . '<br></p>'
    . '<p><b>Kolik to bude stát:</b> ' . escapeHtml($information['price_text']) . '<br></p>';

$pattern = '~<h2>Informace</h2>.*?(?=\s*<!-- <p>)~s';
$page = preg_replace($pattern, $informationSection, $page, 1);

if ($page === null) {
    throw new RuntimeException('Sekci Informace se nepodařilo vložit do stránky.');
}

echo $page;
