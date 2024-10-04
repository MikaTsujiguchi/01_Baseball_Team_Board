<?php
//$_SESSION使うよ！
session_start();  // セッションは使うが、ログインチェックはしない

// funcs.php のインクルード
include "funcs.php";

// 1. POSTデータ取得
$name      = filter_input( INPUT_POST, "name" );
$lid       = filter_input( INPUT_POST, "lid" );
$lpw       = filter_input( INPUT_POST, "lpw" );
$kanri_flg = filter_input( INPUT_POST, "kanri_flg" );
$lpw       = password_hash($lpw, PASSWORD_DEFAULT);   // パスワードをハッシュ化

// 2. DB接続します
$pdo = db_conn();

// 3. データ登録SQL作成
$sql = "INSERT INTO gs_user_table(name,lid,lpw,kanri_flg,life_flg)VALUES(:name,:lid,:lpw,:kanri_flg,0)";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':name', $name, PDO::PARAM_STR); 
$stmt->bindValue(':lid', $lid, PDO::PARAM_STR); 
$stmt->bindValue(':lpw', $lpw, PDO::PARAM_STR); 
$stmt->bindValue(':kanri_flg', $kanri_flg, PDO::PARAM_INT); 
$status = $stmt->execute();

// 4. データ登録処理後
if ($status == false) {
    sql_error($stmt);
} else {
    // 正常に登録が完了したら、ログイン画面にリダイレクト
    echo "<script>alert('You Are All Set！');
    window.close();
    </script>";
    
}



