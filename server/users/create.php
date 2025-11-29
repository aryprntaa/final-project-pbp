<?php
include '../config.php';

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $age = 24;
    $email = $_POST['email'];

    $conn->query("INSERT INTO users (name, email, age) VALUES ('$name', '$email', $ageg)");
    header("Location: index.php");
}
?>

<form method="POST">
    Name: <input type="text" name="name"><br>
    Email: <input type="email" name="email"><br>
    <button type="submit" name="submit">Save</button>
</form>
