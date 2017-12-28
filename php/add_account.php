<?php
/**
 * Created by PhpStorm.
 * User: guangming
 * Date: 2017/10/28
 * Time: 10:02
 */


include './conn.php';


if (!empty($_POST)) {
    foreach ($_POST as $key => $value) {
        $$key = $value;
    }
    $sql = "select username from user where username='$username'";
    $row = mysqli_fetch_assoc(mysqli_query($link, $sql));
    //判断用户名是否存在 用户名唯一
    if ($row) {
        $result = array('code' => 0, 'msg' => '用户名已存在', 'name' => $username);
        exit(json_encode($result)) ;
    } else {
        if(!empty($_FILES)){

        }else{
            $headerfile = "./images/default.jpg";
        }
        $sql = "insert into user values(null,'$username','$password',$sex,'$mobile','$headerfile');";
        mysqli_query($link,$sql);
        $result = array('code' => 1, 'msg' => '注册成功，3秒后页面跳转', 'name' => $username);
        echo json_encode($result);
    }

//    $result = array('code'=>95);
//    echo json_encode($result);
} else {
    echo "<script>alert('非法操作!');location.href='../index.php'</script>";
}