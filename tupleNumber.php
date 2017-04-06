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
        $sql = "SELECT (
            SELECT COUNT(*) FROM Accounts
            ) AS count1,
            (
            SELECT COUNT(*) FROM Cards
            ) AS count2,
            (
            SELECT COUNT(*) FROM Collections
            ) AS count3,
            (
            SELECT COUNT(*) FROM Deck_Meta
            ) AS count4,
            (
            SELECT COUNT(*) FROM Decks
            ) AS count5,
            (
            SELECT COUNT(*) FROM Effects
            ) AS count6
        FROM dual";
        $totalRows = 0;
        $result = $db->select($sql);
        for ($i = 1; $i < 7; $i++)
        {
            $totalRows += intval($result[0]["COUNT" . $i]);
            //echo $result[0]["COUNT" . $i] . "</br>";
        }
        echo "<b>" . $totalRows . "</b>";
    ?>
  </body>
</html>
