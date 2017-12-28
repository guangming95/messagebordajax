$(function () {
//类别请求
    $.ajax({
        url: '../php/category.php',
        type: 'get',
        dataType: 'json',
        success: function (info) {
            var str = '';
            info.forEach(function (value, index) {
                // console.log(value);
                str += template("myTplcategory", value);
            });
            $('#category').html(str);
        },
        error: function (info) {

        }
    });

    //通过本地cookie判断是否登录
    if($.cookie('username') === null){
        showTips('您还未登录，无法进行该操作,3秒后跳转');
        setTimeout(function () {
            location.href="../index.html";
        },3000);
        return;
    }

    //发布
    $('#submitBtn').click(function () {
        if ($('#title').val().trim() === '') {
            showTips('标题不能为空');
            return;
        }
        if ($('#content').val().trim() === '') {
            showTips('内容不能为空');
            return;
        }

        $.ajax({
            url: '../php/add_comment.php',
            type: 'get',
            dataType: 'text',
            data: {
                title: $('#title').val().trim(),
                category: $('#category').val(),
                content: $('#content').val()
            },
            success: function (info) {
                showTips(info);
            },
            error: function () {
                showTips('服务器繁忙,请稍后再试');
            }
        });
    });

    //重置
    $('#resetBtn').click(function () {
        $('#title').val('');
        $('#content').val('');
    });
    function showTips(content) {
        $('.tips>p').text(content).stop(true).fadeIn(400).delay(2000).fadeOut(400);
    }
});