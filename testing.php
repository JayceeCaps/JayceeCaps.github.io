<?php
// Load the HTML file or document
$html = file_get_contents('test.html');

// Create a new DOMDocument object
$dom = new DOMDocument();

// Load the HTML into the DOMDocument object
$dom->loadHTML($html);

// Extract all the text using DOMDocument's nodeValue property
$text = $dom->nodeValue;

// Print the text
echo $text;
?>
