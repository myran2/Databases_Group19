<?php
    require 'connection.php';
?>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

  </head>

  <body>
    The amount of tuples is: 
    <?php
        $db = new DB;
        $sql = "SELECT COUNT(*) FROM Decks";
        $result = $db->select($sql);
        echo $result[0]["COUNT(*)"];
    ?>
  </body>
</html>
