<?php
/**
 * Created by PhpStorm.
 * User: guangming
 * Date: 2017/10/29
 * Time: 21:03
 */


include './conn.php';

session_start();
if(!empty($_GET)){
    foreach ($_GET as $key => $value){
        $$key = $value;
    }

    $sql = "select * from comment join category on comment.category_id=category.category_id where comment_id=$id;";

    $result = mysqli_query($link,$sql);

    $arr = array();

    $row = mysqli_fetch_assoc($result);
    array_push($arr,$row);

    echo json_encode($arr);
}else {
    echo "<script>alert('非法请求！');location.href='../index.php'</script>";
}
