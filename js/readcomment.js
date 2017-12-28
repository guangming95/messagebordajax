$(function () {
    var urlstr = location.href;
    var id = urlstr.slice(urlstr.lastIndexOf('=')+1);
    console.log(id);
    console.log(urlstr);
    $.ajax({
        url: '../php/edit_comment_read.php',
        type: 'get',
        data:{id:id},
        dataType: 'json',
        success: function (info) {
            // console.log(info);
            var str = '';
            info.forEach(function (value, index) {
                // console.log(value);
                str += template("myTplcontent", value);
            });
            $('.header>.w>.login>.center').html(str);
        },
        error: function () {
            showTips('请求错误，3秒后页面跳转');
            setTimeout(function () {
                location.href='../index.html';
            },3000);
        }
    });
});



function showTips(content) {
    $('.tips>p').text(content).stop(true).fadeIn(400).delay(2000).fadeOut(400);
}