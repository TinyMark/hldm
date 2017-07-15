/*
 * @Author: zhengwei
 * @Date:   2016-11-20 23:39:57
 * @Last Modified by: TinyMark
 * @Last Modified time: 2017-07-14 22:30:39
 */

'use strict';
$(function () {
    $('.layer').on('click', function () {
        $(this).toggleClass('show');
        $('.layout').css('transform', "translateX(0px)");
        $('.left-menu').css('transform', "translateX(-200px)");
    })
    $('.icon-menu').on('click', function () {
        $('.layer').toggleClass('show');
        $('.layout').css('transform', "translateX(200px)");
        $('.left-menu').css('transform', "translateX(0px)");
    });
    getSerialList();
    function getSerialList() {
        $.ajax({
            // url: "http://139.199.192.48:9091/api/getlianzai",
            url: "http://192.168.65.111:8888/api/getlianzai",
            success: function (data) {
                var html = template('serialListTmp', { result: data });
                $('#serial').html(html);
            }
        })
    }
})
