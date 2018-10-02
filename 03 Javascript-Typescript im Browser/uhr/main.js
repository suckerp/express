var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
//let testHour = 0
//let testMinute = 0
//let testSecond = 0
setInterval(function () {
    var Tag = new Date();
    second.setAttribute('transform', "rotate(" + Tag.getSeconds() * 6 + ", 100, 100)");
    minute.setAttribute('transform', "rotate(" + Tag.getMinutes() * 6 + ", 100, 100)");
    hour.setAttribute('transform', "rotate(" + (Tag.getHours() * 30 + (Tag.getMinutes() / 2)) + ", 100, 100)");
    //minute.setAttribute('transform', `rotate(${90}, 100, 100)`)
    //hour.setAttribute('transform', `rotate(${(130)}, 100, 100)`)
    /*second.setAttribute('transform', `rotate(${testSecond++}, 100, 100)`)
    minute.setAttribute('transform', `rotate(${testSecond/60}, 100, 100)`)
    hour.setAttribute('transform', `rotate(${testSecond/3600}, 100, 100)`)*/
    /*if (testSecond == 360){
        minute.setAttribute('transform', `rotate(${testMinute=testMinute+6}, 100, 100)`)
    }

    if (testMinute==360){
        hour.setAttribute('transform', `rotate(${testHour=testHour+30}, 100, 100)`)
        testMinute = 0
    }

    if (testSecond <360){
        second.setAttribute('transform', `rotate(${testSecond++}, 100, 100)`)
    }
    else{
        testSecond = 0
        second.setAttribute('transform', `rotate(${testSecond++}, 100, 100)`)
    }*/
}, (1000));
