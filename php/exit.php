<?php
/**
 * Created by PhpStorm.
 * User: guangming
 * Date: 2017/10/30
 * Time: 9:38
 */

include './conn.php';
session_start();
//var_dump($_SESSION['username']);
if (!empty($_SESSION['username'])) {
    unset($_SESSION['username']);
    session_destroy();
    echo '退出成功，3秒后跳转';
} else {
    echo "<script>alert('非法操作!');location.href='../index.php'</script>";
}