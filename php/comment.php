<?php
/**
 * Created by PhpStorm.
 * User: guangming
 * Date: 2017/10/28
 * Time: 17:14
 */
include './conn.php';

$sql = "select * from comment join category on comment.category_id=category.category_id;";

$result = mysqli_query($link,$sql);

$arr = array();

while ($row = mysqli_fetch_assoc($result)){
    array_push($arr,$row);
}

echo json_encode($arr);

