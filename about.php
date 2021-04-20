<?php
    if(!isset($_COOKIE['username']))
    {
        header("Location:login.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>   
      a{
        color:white;
        text-decoration: none;
      }
      section {
        font-family: sans-serif;
        margin-top: 7.5rem;
      }
    </style>
    <title>About</title>
</head>
<body>
    <?php 
        include("./header.html");
    ?>
    <section>
      <p>
        This web application was made by the following students of Ferusson College, Pune for their CSC3513 Computer Science Project – I (T.Y.B.Sc 2020-21) -
      </p>
      <ul>
        <li><b>Anish Nair</b> - 8716</li>
        <li><b>Hradyesh Singh</b> - 8723</li>
        <li><b>Kamran Ansari</b> - 8728</li>
      </ul>
    </section>
</body>
</html>