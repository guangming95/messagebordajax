<?php
/**
 * Created by PhpStorm.
 * User: guangming
 * Date: 2017/10/30
 * Time: 8:30
 */


include './conn.php';
session_start();
if(!empty($_SESSION)){
    $result = array('code'=>1,'username'=>$_SESSION['username']);
}else{
    $result = array('code'=>0,'username'=>null);
}

echo json_encode($result);