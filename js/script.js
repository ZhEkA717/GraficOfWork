"use strict";

document.addEventListener('DOMContentLoaded',()=>{
    const date = new Date();

const renderCalendar = () => {
    const monthDays = document.querySelector(".days"),
        lastDay = new Date(date.getFullYear(),
            date.getMonth() + 1, 0).getDate(),
        months = [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь'
        ],
        weekdays = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
        ],
        fons = {
            jan: "imgs/jan.jpg",
            feb: "imgs/feb.jpg",
            mart: "imgs/mart.jpg",
            apr: "imgs/apr.jpg",
            may: "imgs/may.jpg",
            jn: "imgs/jn.jpg",
            jl: "imgs/jl.jpg",
            agt: "imgs/agt.jpg",
            sept: "imgs/sept.jpg",
            oct: "imgs/oct.jpg",
            nov: "imgs/nov.jpg",
            dec: "imgs/dec.jpg"
        }


    document.querySelector(".date h1").innerHTML
        = `${months[date.getMonth()]} ${date.getFullYear()}` ;

    const container = document.querySelector('.container');

    switch (months[date.getMonth()]) {
        case "Январь": container.style.backgroundImage = `url('${fons.jan}')`;
            break;
        case "Февраль": container.style.backgroundImage = `url('${fons.feb}')`;
            break;
        case "Март": container.style.backgroundImage = `url('${fons.mart}')`;
            break;
        case "Апрель": container.style.backgroundImage = `url('${fons.apr}')`;
            break;
        case "Май": container.style.backgroundImage = `url('${fons.may}')`;
            break;
        case "Июнь": container.style.backgroundImage = `url('${fons.jn}')`;
            break;
        case "Июль": container.style.backgroundImage = `url('${fons.jl}')`;
            break;
        case "Август": container.style.backgroundImage = `url('${fons.agt}')`;
            break;
        case "Сентябрь": container.style.backgroundImage = `url('${fons.sept}')`;
            break;
        case "Октябрь": container.style.backgroundImage = `url('${fons.oct}')`;
            break;
        case "Ноябрь": container.style.backgroundImage = `url('${fons.nov}')`;
            break;
        case "Декабрь": container.style.backgroundImage = `url('${fons.dec}')`;
            break;

        default:
            break;
    }

    updateTime();
    function updateTime() {
        var currTime = new Date();
        var currTimeStr = formatDateTime(currTime);
        document.querySelector(".date p").innerHTML =
            `${currTimeStr}`;
        setTimeout(updateTime, 1000);
    }
    // форматирует переданную дату-время в формате дд.мм.гггг чч:мм:сс
    function formatDateTime(dt) {
        var year = dt.getFullYear();
        var month = dt.getMonth() + 1;
        var dayW = dt.getDay();
        var day = dt.getDate();
        var hours = dt.getHours();
        var minutes = dt.getMinutes();
        var seconds = dt.getSeconds();
        return weekdays[dayW] + " " + str0l(day, 2) + '.' + str0l(month, 2) + '.' + year + ' ' + str0l(hours, 2) + ':' + str0l(minutes, 2) + ':' + str0l(seconds, 2);
    }

    // дополняет строку val слева нулями до длины Len
    function str0l(val, len) {
        var strVal = val.toString();
        while (strVal.length < len)
            strVal = '0' + strVal;
        return strVal;
    }



    let days = "";

    let firstday = new Date(date.setDate(1));
    let dayOfWeek = firstday.getDay();

    for (let i = 0; i < dayOfWeek - 1; i++) {
        days += `<div></div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()) {
            days += `<div class = "today">${i}</div>`;
        } else {
            days += `<div class = "num">${i}</div>`;
        }
        monthDays.innerHTML = days;
    }

    const divArray = document.querySelectorAll(".days div");

    divArray.forEach((item, i) => {
        if (i == 5 || i == 6 || i == 12 || i == 13 || i == 19
            || i == 20 || i == 26 || i == 27 || i == 33 || i == 34) {
            item.style.color = "rgba(255,0,0,0.8)";
        }
    });

}



document.querySelector(".prev").addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});
document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});
document.querySelector(".prev").addEventListener('touchend', () => {
    window.navigator.vibrate(100);
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});
document.querySelector('.next').addEventListener('touchend', () => {
    window.navigator.vibrate(100);
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

document.addEventListener('keydown', (EO) => {
    if (EO.code === "ArrowLeft") {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    }
});
document.addEventListener('keydown', (EO) => {
    if (EO.code === "ArrowRight") {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    }
});

renderCalendar();

document.querySelector(".days").addEventListener('click', (EO) => {
    EO.preventDefault();
    let el = EO.target;
    console.log(el.classList);
    if ((el.classList.value === "num" || el.classList[0] === "today")
        && el.childNodes.length < 3) {
        el.innerHTML += `<span class ="star">*</span>`;
    } else if ((el.classList.value === "num" || el.classList.value === "today")
        && el.childNodes.length == 3) {
        el.innerHTML = el.childNodes[0].data;
    }
});





// swipe--------------------------------

function debounceSerie(func, interval, immediate) {
    var timer;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timer = null;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timer;
        clearTimeout(timer);
        timer = setTimeout(later, interval);
        if (callNow)
            func.apply(context, args);
    };
};

var container = document.querySelector('.container');
container.addEventListener('touchstart', funTouchStart, false);
let move = "stop"
function funTouchStart(EO) {
    EO = EO || window.event;
    EO.preventDefault();
    var touchInfoStart = EO.targetTouches[0];
    var touchXs = touchInfoStart.pageX;
    var touchYs = touchInfoStart.pageY;

    container.addEventListener('touchmove', debounceSerie(funTouchMove, 500, false), false);

    function funTouchMove(EO) {
        EO = EO || window.event;
        EO.preventDefault();
        var touchInfoMove = EO.targetTouches[0];
        var touchX1 = touchInfoMove.pageX;
        var touchY1 = touchInfoMove.pageY;
        var touchXm = touchX1;
        var touchYm = touchY1;

        var minSwipe = 20;

        if (touchXs > touchXm && touchXs - touchXm >= minSwipe) {
            if (Math.abs(touchXs - touchXm) > Math.abs(touchYs - touchYm)) {
                move = 'left';
            }
        } else if (touchXs < touchXm && touchXm - touchXs >= minSwipe) {
            if (Math.abs(touchXs - touchXm) > Math.abs(touchYs - touchYm)) {
                move = 'right';
            }
        }
    }
    container.removeEventListener('touchmove', funTouchMove, false);
}
container.addEventListener('touchend', funTouchEnd, false);
function funTouchEnd(EO) {
    EO = EO || window.event;
    // EO.preventDefault();

    if (move == "left") {
        window.navigator.vibrate(100);
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    } else if (move == "right") {
        window.navigator.vibrate(100);
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    }
    move="stop";
}

});

document.getElementById('refresh').addEventListener('click',()=>{
    window.navigator.vibrate(100);
    location.reload();
});

