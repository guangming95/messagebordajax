$(function(){
    if($.cookie('username') !== null){
        showTips('您已登录，3秒后页面跳转');
        setTimeout(function () {
            location.href='../index.html';
        },3000);
    }
    // 注册
    $('#addaccountBtn').click(function () {

        if($('#username').val().trim() === ''){
            showTips('用户名不能为空');
            return;
        }
        if($('#password').val().trim() === ''){
            showTips('密码不能为空');
            return;
        }
        if($('#rpassword').val().trim() === ''){
            showTips('两次密码输入不一致');
            return;
        }


        console.log($('#ajaxForm').serialize());
        $.ajax({
            url:'../php/add_account.php',
            type:'post',
            data:$('#ajaxForm').serialize(),
            dataType:'json',
            success:function (info) {
                if(info.code === 0){
                    $('#username').val('');
                    showTips(info.msg);
                    return;
                }else{
                    showTips(info.msg);
                    setTimeout(function () {
                        location.href='../index.html';
                    },3000);
                }
                console.log(info.code);

            },
            error:function () {
                showTips('服务器繁忙，请稍后再试');
            }
        });
    });
    //登录
    $('#loginBtn').click(function () {
        if($('#username').val().trim() === ''){
            showTips('请输入用户名');
            return;
        }
        if($('#password').val().trim() === ''){
            showTips('请输入密码');
            return;
        }

        $.ajax({
            url:'../php/login.php',
            type:'post',
            dataType:'json',
            data:$('#ajaxForm').serialize(),
            success:function (info) {
                console.log(info);
                if(info.code === 0){
                    showTips(info.msg);
                    $('#username').val('');
                    $('#password').val('');
                    return;
                }else{
                    showTips(info.msg);
                    $.cookie('username', info.username,{path:'/'});

                    setTimeout(function () {
                        location.href='../index.html';
                    },3000);
                }
            },
            error:function () {
                showTips('服务器繁忙，请稍后再试');
            }
        });
    });
    //跳转注册
    $('#add_account').click(function () {
        location.href='./add_account.html';
    });
    //跳转登录
    $('#login_Btn').click(function () {
        location.href='./login.php';
    });
    //重置
    $('#resetBtn').click(function () {
        $('#username').val('');
        $('#password').val('');
        $('#rpassword').val('');
        $('#mobile').val('');
        $('#testcode').val('');
    });




    function showTips(content) {
        $('.tips>p').text(content).stop(true).fadeIn(400).delay(2000).fadeOut(400);
    }
});