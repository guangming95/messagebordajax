<?php
/**
 * Created by PhpStorm.
 * User: guangming
 * Date: 2017/10/28
 * Time: 17:13
 */

include './conn.php';

//comment_id int primary key auto_increment,
//username varchar(70) not null,
//comment_title varchar(30) not null,
//content text,
//comment_time datetime not null,
//category varchar(20) not null
//insert into user values(null,'admin','admin',1,'12345678901',"./images/default.jpg");
session_start();


if($_SESSION['username']){
    foreach ($_GET as $key => $value){
        $$key = $value;
    }
    $time=date('Y-m-d H:i:s',time());
    $sql = "insert into comment values(null,'$_SESSION[username]','$title','$content','$time',$category);";
    $result = mysqli_query($link,$sql);
    echo '发表成功，请稍后';

}else{
    echo '未登录';
}


//textarea内容保存到数据库，然后从数据库取出来用div显示
//1. 前台获取textarea的value值
//2. 把value值传到后台，对特殊字符进行处理，php为例：htmlspecialchars（value）
//3. 把经过特殊字符处理之后的value保存到数据库。（为什么要进行特殊字符处理？ 避免脚本注入等问题啊！）
//4. 存到数据库的value拿出来，以html的方式显示，是可以，但是他的换行没了，据说是保存到数据库的时候，换行‘\n’变成了空格
//5. 那么显示的时候该如何把换行找回来呢？ php函数nl2br（value）
//6. ok,完成了，这样拿到的数据可以直接在html中显示，也会包括换行，也防止了脚本注入