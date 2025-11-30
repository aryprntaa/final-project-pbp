<?php
include '../conn.php';
$result = $conn->query("
    SELECT 
        categories._id AS category_id, 
        categories.name AS category_name, 
        products._id AS product_id, 
        products.name AS product_name
    FROM categories
    JOIN products ON categories._id = products.category_id
");


?>

<a href="create.php">Add Product</a>

<table border="1" cellpadding="8">
<tr>
    <th>ID</th>
    <th>Category Name</th>
    <th>Name</th>
    <th>Action</th>
</tr>

<?php while($row = $result->fetch_assoc()): ?>
<tr>
    <td><?= $row['product_id']; ?></td>
    <td><?= $row['category_name']; ?></td>
    <td><?= $row['product_name']; ?></td>
    <td>
        <a href="update.php?_id=<?= $row['product_id']; ?>">Edit</a>
        <a href="delete.php?_id=<?= $row['product_id']; ?>" onclick="return confirm('Delete?')">Delete</a>
    </td>
</tr>
<?php endwhile; ?>

</table>
