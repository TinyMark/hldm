/*
 * @Author: zhengwei
 * @Date:   2016-11-21 00:16:07
 * @Last Modified by: TinyMark
 * @Last Modified time: 2017-06-27 14:11:00
 */

'use strict';
$(function () {
    setFeatureList();

    function setFeatureList() {
        $.ajax({
            // url: "http://139.199.192.48:9091/api/gettopics",
            url: "http://192.168.112.1:8888/api/gettopics",
            success: function (data) {
                var html = template('featuresListTmp', { result: data });
                $('#features > ul').html(html);
            }
        })
    }
})