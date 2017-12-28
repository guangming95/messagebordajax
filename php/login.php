<?php
/**
 * Created by PhpStorm.
 * User: guangming
 * Date: 2017/10/28
 * Time: 15:33
 */

include 'conn.php';
session_start();

if(!empty($_POST)){
    foreach ($_POST as $key => $value){
        $$key = $value;
    }
    $sql = "select username from user where username='$username' and password='$password'";
    $row = mysqli_fetch_assoc(mysqli_query($link,$sql));
    if($row){
        $result = array('code'=>1,'msg'=>'登录成功,3秒后页面跳转','username'=>$username);
        $_SESSION['username'] = $username;
    }else{
        $result = array('code'=>0,'msg'=>'用户名或密码错误');
    }
    echo json_encode($result);
}else{
    echo "<script>alert('非法操作!');location.href='../index.php'</script>";
}