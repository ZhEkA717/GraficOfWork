"use strict";

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
        ]

    document.querySelector(".date h1").innerHTML
        = months[date.getMonth()];

    // for (let i = 0; i < months.length; i++) {
    //     let letterArray = months[i].split("");
    //     for (let j = 0; j < letterArray.length; j++) {
    //         if (j == letterArray.length - 1 && (letterArray[j] == "ь" ||
    //             letterArray[j] == "й")) {
    //             letterArray.pop();
    //             letterArray.push('я');
    //         } else if (j == letterArray.length - 1 && letterArray[j] == "т") {
    //             letterArray.push('a');
    //         }
    //     }
    //     months[i] = letterArray.join("");
    // }

    setTimeout(updateTime,0);
    function updateTime() {
        var currTime = new Date();
        var currTimeStr = formatDateTime(currTime);
        document.querySelector(".date p").innerHTML =
            `${currTimeStr}`;
            setTimeout(updateTime,1000);
    }
    // форматирует переданную дату-время в формате дд.мм.гггг чч:мм:сс
    function formatDateTime(dt) {
        var year=dt.getFullYear();
        var month=dt.getMonth()+1;
        var dayW = dt.getDay();
        var day=dt.getDate();
        var hours=dt.getHours();
        var minutes=dt.getMinutes();
        var seconds=dt.getSeconds();
        return weekdays[dayW] +" "+ str0l(day,2) + '.' + str0l(month,2) + '.' + year + ' ' + str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
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
}



document.querySelector(".prev").addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});
document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
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







