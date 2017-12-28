$(function(){
    $.ajax({
        url: '../php/edit_comment_read.php',
        type: 'get',
        dataType: 'json',
        success: function (info) {
            // console.log(info);
            console.log(info[0]);
            console.log(info[0].comment_title);
            $('#title').val(info[0].comment_title);
            if(info[0].category_name)
            $('#category').val(info[0].category_name);
            $('#content').val(info[0].content);
        },
        error: function () {
            showTips('网络维护，请稍后访问')
        }
    });
});