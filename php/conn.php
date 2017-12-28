<?php
/**
 * Created by PhpStorm.
 * User: guangming
 * Date: 2017/10/28
 * Time: 10:11
 */

header("content-type:text/html;charset=utf-8");

$db_host = 'localhost';
$db_user = 'root';
$db_pwd = 'roots';
$db_name = 'messageboard';


$link = mysqli_connect($db_host,$db_user,$db_pwd,$db_name);
if(!$link){
    echo "链接失败，请重试".mysqli_error();
}

mysqli_query($link,"set names utf8");
