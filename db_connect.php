<?php

$servername = "localhost";
$username = "root"; // Default user
$password = ""; // Default password is empty
$database = "LBMS"; //Name of your database

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";


//or you can also do this:
// $conn = mysqli_connect("localhost:3307", "root", "", "mamburao_db");

// if (!$conn) {
//     die("Connection failed: " . mysqli_connect_error());
// }
// echo "Connected!";