<?php

header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");


if($_SERVER["REQUEST_METHOD"] != "POST"){

    http_response_code(405);
    exit;


}


$items = filter_input(INPUT_POST, "user");
$decoded = json_decode($items, true);
var_dump($decoded);


?>


