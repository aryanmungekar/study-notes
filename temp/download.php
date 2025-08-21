<?php
// Google Drive direct link
$fileUrl = "https://drive.google.com/uc?export=download&id=1FgwJ7oNcqwcTgEHZ6vKW_7DK5761L-Mf";

// Custom filename
$customName = "My_Custom_File.pdf";

// Send correct headers
header("Content-Type: application/pdf");
header("Content-Disposition: attachment; filename=\"$customName\"");

// Fetch and stream file
readfile($fileUrl);
?>
