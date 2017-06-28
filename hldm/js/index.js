/*
 * @Author: zhengwei
 * @Date:   2016-10-19 17:07:19
 * @Last Modified by: TinyMark
 * @Last Modified time: 2017-06-28 14:33:21
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
    getSlide();

    function getSlide() {
        $.ajax({
            // url: "http://139.199.192.48:9091/api/getlunbo",            
            url: "http://192.168.112.5:8888/api/getlunbo",
            success: function (data) {
                var html = template('slideTmp', { result: data });
                $('.carousel-inner').html(html);
                $('.carousel-inner > .item').eq(0).addClass('active');
            }
        })
    }
    $('#cartoonList > .nav-tabs > li > a').on('click', function () {
        var tabPaneId = $(this).attr("href");
        getCartoonList(tabPaneId, $(this).data("index"));
    });
    getCartoonList('#cartoonTitle1', 1);

    function getCartoonList(dom, index) {
        $.ajax({
            // url: "http://139.199.192.48:9091/api/gethometab/" + index + "",            
            url: "http://192.168.112.5:8888/api/gethometab/" + index + "",
            success: function (data) {
                var html = template("cartoonListTmp", { result: data });
                $(dom).find("ul").eq(0).html(html);
            }
        })
    }
    var startX = 0;
    var endX = 0;
    var distanceX = 0;
    $('.carousel').on('touchstart', function (e) {
        startX = e.originalEvent.targetTouches[0].clientX;
    });
    $('.carousel').on('touchend', function (e) {
        endX = e.originalEvent.changedTouches[0].clientX;
        distanceX = endX - startX;
        if (distanceX > 0) {
            $('.carousel').carousel('prev');
        } else {
            $('.carousel').carousel('next');
        }
    })
});
