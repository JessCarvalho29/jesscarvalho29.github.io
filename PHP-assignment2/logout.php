<?php
  require './inc/header.php';
  session_unset();
  session_destroy();
  header('location: index.php');
  require './inc/footer.php';
?>
