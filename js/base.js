$(function () {
    //类别请求
    $.ajax({
        url: '../php/category.php',
        type: 'get',
        dataType: 'json',
        success: function (info) {
            var str = '<span><a href="./../index.php">首页</a></span>';
            info.forEach(function (value, index) {
                str += template("myTplcategory", value);
            });
            $('.nav>.w').html(str);
        },
        error: function (info) {

        }
    });
    // 判断是否登录
    $.ajax({
        url: '../php/issetlogin.php',
        dataType: 'json',
        type: 'post',
        success: function (info) {
            console.log(info);
            if (info.code === 1) {
                $('.header>.top>.w>.right>.user').removeClass('disable');
                $('.header>.top>.w>.right>.visitor').addClass('disable');
                $('.aside').removeClass('disable');
            } else if (info.code === 0) {
                $('.header>.top>.w>.right>.visitor').removeClass('disable');
                $('.header>.top>.w>.right>.user').addClass('disable');
                $('.aside').addClass('disable');
            }

        },
        error: function (info) {
            console.log(info);
            $('.header>.top>.w>.right>.visitor').removeClass('disable');
            $('.header>.top>.w>.right>.user').addClass('disable');
        }
    });

    //侧边栏点击事件
    $('#add_comment').click(function () {
        location.href = './html/add_comment.html';
    });

    $('#exit').click(function () {
        // $.cookie('age', '1', { path: '/' });
        $.ajax({
            url: '../php/exit.php',
            type: 'post',
            dataType: 'text',
            success: function (info) {
                console.log(info);
                showTips(info);
                $.cookie('username', null, {expires: -100, path: '/'});
                setTimeout(function () {
                    location.href = '../index.html';
                }, 3000);
            },
            error: function (info) {
                console.log(info);
            }
        });
    });


    $('.scrolltop').click(function () {
        $('html,document').animate({scrollTop: 0});
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.scrolltop').removeClass('disable');
        } else {
            $('.scrolltop').addClass('disable');
        }
    });



    function showTips(content) {
        $('.tips>p').text(content).stop(true).fadeIn(400).delay(2000).fadeOut(400);
    }

});