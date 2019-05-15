function f(className) {
    return $(className);
}

$(function () {
    const dateDetail = formatDate(new Date());
    updateDate(dateDetail);
    request(dateDetail.date);
});

/*play = function(){
    var audio = $(".tts-music")[0];
    audio.pause();
    audio.play();
}*/

formatDate = function (a) {
    return {
        y: a.getFullYear(),
        M: a.getMonth() + 1,
        d: a.getDate(),
        date: a.Format("yyyy-MM-dd")
    };
};

Date.prototype.Format = function (fmt) {
    var o = {
        "y+": this.getFullYear(),
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S+": this.getMilliseconds()             //毫秒
    };
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            if (k == "y+") {
                fmt = fmt.replace(RegExp.$1, ("" + o[k]).substr(4 - RegExp.$1.length));
            }
            else if (k == "S+") {
                var lens = RegExp.$1.length;
                lens = lens == 1 ? 3 : lens;
                fmt = fmt.replace(RegExp.$1, ("00" + o[k]).substr(("" + o[k]).length - 1, lens));
            }
            else {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
    }
    return fmt;
}

Date.prototype.mon = function (e) {
    return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][+e - 1]
};

updateNote = function (data) {
    /*f(".quote-preview").css("background-image", "url('" + data.picture2 + "')"),*/ f(".content").html(data.content), f(".translation").html(data.note), f(".content-author").html(data.translation);
    /*f(".tts-music").attr("src", data.tts);*/
};

updateDate = function (date) {
    f(".year").html(date.y), f(".month").html(Date.prototype.mon(date.M) + ".&nbsp;"), f(".day").html(date.d);
};

successCallback = function (data) {
    updateNote(data);
};

request = function (date) {
    $.ajax({
        type: "get",
        url: "//sentence.iciba.com/index.php?c=dailysentence&m=getdetail&title=" + date,
        dataType: "jsonp",
        success: function (data) {
            if (data.errno === 10010) {
                console.log(data.errmsg);
            }
            successCallback(data);
        },
        error: function () {
            alert('fail');
        }
    });
}
