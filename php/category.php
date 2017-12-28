<?php
/**
 * Created by PhpStorm.
 * User: guangming
 * Date: 2017/10/29
 * Time: 11:34
 */

include './conn.php';

$sql = 'select * from category';
$result = mysqli_query($link,$sql);
$arr = array();
while($row = mysqli_fetch_assoc($result)){
    array_push($arr,$row);
}

//var_dump($arr);
echo json_encode($arr);