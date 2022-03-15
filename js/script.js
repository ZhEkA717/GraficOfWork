"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    const renderCalendar = () => {
        const monthDays1 = document.querySelector(".days1"),
            monthDays2 = document.querySelector(".days2"),
            monthDays3 = document.querySelector(".days3"),
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
            = `${months[date.getMonth()]} ${date.getFullYear()}`;

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
        if (window.screen.width < 900) {
            container.style.backgroundSize = `auto ${window.screen.availHeight}px`
        }
        window.addEventListener("resize", funResize)
        function funResize() {
            if (window.screen.width < 900) {
                container.style.backgroundSize = `auto ${window.screen.availHeight}px`
            }
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
            monthDays1.innerHTML = days;
            monthDays2.innerHTML = days;
            monthDays3.innerHTML = days;
        }

        const divArray1 = document.querySelectorAll(".days1 div");
        const divArray2 = document.querySelectorAll(".days2 div");
        const divArray3 = document.querySelectorAll(".days3 div");

        function coloredW(div) {
            div.forEach((item, i) => {
                if (i == 5 || i == 6 || i == 12 || i == 13 || i == 19
                    || i == 20 || i == 26 || i == 27 || i == 33 || i == 34) {
                    item.style.color = "rgba(255,0,0,0.8)";
                }
            });
        }

        coloredW(divArray1);
        coloredW(divArray2);
        coloredW(divArray3);

        slidesBox.addEventListener("transitionstart", () => {
            coloredW(divArray1);
            coloredW(divArray2);
            coloredW(divArray3);
        });


    }
    function ckickAudioPlay(){
        audioClick.currentTime = 0;
        audioClick.volume = 1;
        audioClick.play();
    }
    document.querySelector(".prev").addEventListener('click', () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
        index <= 0 ? false : index--;
        slider();
        ckickAudioPlay();
    });
    document.querySelector('.next').addEventListener('click', () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
        index >= slides.length - 1 ? false : index++;
        slider();
        ckickAudioPlay();
    });
    document.querySelector(".prev").addEventListener('touchend', () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
        index <= 0 ? false : index--;
        slider();
        ckickAudioPlay();
    });
    document.querySelector('.next').addEventListener('touchend', () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
        index >= slides.length - 1 ? false : index++;
        slider();
        ckickAudioPlay();
    });

    document.addEventListener('keydown', (EO) => {
        if (EO.code === "ArrowLeft") {
            date.setMonth(date.getMonth() - 1);
            renderCalendar();
            index <= 0 ? false : index--;
            slider();
        }
    });
    document.addEventListener('keydown', (EO) => {
        if (EO.code === "ArrowRight") {
            date.setMonth(date.getMonth() + 1);
            renderCalendar();
            index >= slides.length - 1 ? false : index++;
            slider();
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

    var container = document.querySelector('.container');
    container.addEventListener('touchstart', funTouchStart, false);
    let move = "stop";
    function funTouchStart(EO) {
        EO = EO || window.event;
        EO.preventDefault();
        var touchInfoStart = EO.targetTouches[0];
        var touchXs = touchInfoStart.pageX;
        var touchYs = touchInfoStart.pageY;

        container.addEventListener('touchmove', funTouchMove);
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
        setTimeout(() => {
            container.removeEventListener('touchmove', funTouchMove, false);
        }, 500);
    }
    container.addEventListener('touchend', funTouchEnd, false);
    function funTouchEnd(EO) {
        EO = EO || window.event;
        // EO.preventDefault();
        if (move == "left") {
            date.setMonth(date.getMonth() + 1);
            renderCalendar();
            index >= slides.length - 1 ? false : index++;
            slider();
            audioSlyde.play();
        } else if (move == "right") {
            date.setMonth(date.getMonth() - 1);
            renderCalendar();
            index <= 0 ? false : index--;
            slider();
            audioSlyde.currentTime=0;
            audioSlyde.play();
        }
        move = "stop";
    }

    document.getElementById('refresh').addEventListener('click', (EO) => {
        EO.target.src = "imgs/close.png"
        audioClick.currentTime = 0;
        audioClick.volume = 1;
        audioClick.play();
        setTimeout(()=>{
            location.reload();
        },500);
    });

});

const d = document;
let index = 1;
const container = d.querySelector(".container-slider"),
    slidesBox = d.querySelector(".slides-box"), // контейнер с картинками
    slides = d.querySelectorAll(".days"),// слайды
    calendar = d.querySelector(".calendar"); //картики

function sizing() {
    slidesBox.style.transform = "translateX(" + (-slidesBox.offsetWidth) + "px)";
    container.style.width = calendar.offsetWidth + 1 + "px";
}

sizing();

window.addEventListener("resize", () => {
    sizing();
});

function slider() {
    slidesBox.style.transform = "translateX(" + (-index * slidesBox.offsetWidth) + "px)";
    slidesBox.style.transition = "transform .5s ease-in-out";
}

slidesBox.addEventListener('transitionend', () => {
    if (index == slides.length - 1) {
        index = 1;
        slidesBox.style.transition = "none";
        slidesBox.style.transform = "translateX(" + (-index * slidesBox.offsetWidth) + "px)";
    } else if (index == 0) {
        index = slides.length - 2;
        slidesBox.style.transition = "none";
        slidesBox.style.transform = "translateX(" + (-index * slidesBox.offsetWidth) + "px)";
    }
});


