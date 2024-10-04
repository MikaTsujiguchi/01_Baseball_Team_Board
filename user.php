<?php
// session_start();
// ※htdocsと同じ階層に「includes」を作成してfuncs.phpを入れましょう！
// include "../../includes/funcs.php";
// include "funcs.php";
// sschk();
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Creat A New Account</title>
  <link href="styles_user.css" rel="stylesheet">
</head>
<body>

<!-- Head[Start] -->

<!-- Head[End] -->

<!-- Main[Start] -->
<form method="post" action="user_insert.php">
  <div class="jumbotron">
   
    <p>Creat A New Account</p>
     <label>Name：<input type="text" name="name" required></label><br>
     <br>
     <label>Login ID：<input type="text" name="lid" required></label><br>
     <br>
     <label>Login PW<input type="text" name="lpw" required></label><br>
     <br>
     <label>You are：
      Student<input type="radio" name="kanri_flg" value="0">　
      Teacher<input type="radio" name="kanri_flg" value="1">
    </label>
    <br>
     
     <br>
     <input type="submit" value="Resister">
    
  </div>
</form>
<br>
<button id="navbar-brand" href="index.html" >Go Back To Log In</button>

<script>
  document.getElementById('navbar-brand').addEventListener('click', function() {
    window.close();
  });


  
</script>

<!-- Main[End] -->


</body>
</html>