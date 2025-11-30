<?php
include '../conn.php'; // go up to /server then load conn.php

$categories = $conn->query("SELECT _id, name FROM categories");

if (isset($_POST['submit'])) {
    $category_id = $_POST['category_id'];
    $name = $_POST['name'];

    // Insert INCLUDING password
    $sql = "INSERT INTO products (category_id, name) 
            VALUES ('$category_id', '$name')";

    if ($conn->query($sql)) {
        header("Location: create.php"); // fungsi redirect/memanggil halaman lain
        exit;
    } else {
        echo "Error: " . $conn->error;
    }
}
?>

<form method="POST">
    <label for="categories">Category:</label>
    <select name="category_id" id="categories">
        <?php
        $categories->data_seek(0); // ensure pointer at start
        while($row = $categories->fetch_assoc()):
        ?>
            <option value="<?= $row['_id']; ?>"><?= htmlspecialchars($row['name']); ?></option>
        <?php endwhile; ?>
        </select>
    <br>

    Name: <input type="text" name="name"><br>

    <button type="submit" name="submit">Save</button>
    <button type="button">
        <a href="read.php">Kembali</a>
    </button>
</form>

