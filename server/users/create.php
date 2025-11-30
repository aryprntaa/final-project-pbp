<?php
include '../conn.php'; // go up to /server then load conn.php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $age = $_POST['age'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $gender = $_POST['gender'];

    // Insert INCLUDING password
    $sql = "INSERT INTO users (name, email, age, password, gender) 
            VALUES ('$name', '$email', $age, '$password', '$gender')";

    if ($conn->query($sql)) {
        header("Location: create.php"); // fungsi redirect/memanggil halaman lain
        exit;
    } else {
        echo "Error: " . $conn->error;
    }
}
?>

<form method="POST">
    Name: <input type="text" name="name"><br>
    Email: <input type="email" name="email"><br>
    Password: <input type="text" name="password"><br>
    Gender:<br>
    <input type="radio" id="laki-laki" name="gender" value="1">
    <label for="laki-laki">Laki-laki</label>
    <input type="radio" id="perempuan" name="gender" value="0">
    <label for="perempuan">Perempuan</label><br>
    Age: <input type="number" name="age"><br>
    <button type="submit" name="submit">Save</button>
    <button><a href="read.php">Kembali</a></button>
</form>
