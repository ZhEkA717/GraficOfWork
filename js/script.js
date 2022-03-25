"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const spinner =document.querySelector("#loading img");
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
                days += `<div class = "today num">${i}</div>`;
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

    document.querySelector(".prev").addEventListener('click', () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
        index <= 0 ? false : index--;
        slider();
        restoreInfo();
    });
    document.querySelector('.next').addEventListener('click', () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
        index >= slides.length - 1 ? false : index++;
        slider();
        restoreInfo();
    });
    document.querySelector(".prev").addEventListener('touchend', () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
        index <= 0 ? false : index--;
        slider();
        restoreInfo();
    });
    document.querySelector('.next').addEventListener('touchend', () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
        index >= slides.length - 1 ? false : index++;
        slider();
        restoreInfo();
    });

    document.addEventListener('keydown', (EO) => {
        if (EO.code === "ArrowLeft") {
            date.setMonth(date.getMonth() - 1);
            renderCalendar();
            index <= 0 ? false : index--;
            slider();
            restoreInfo();
        }
    });
    document.addEventListener('keydown', (EO) => {
        if (EO.code === "ArrowRight") {
            date.setMonth(date.getMonth() + 1);
            renderCalendar();
            index >= slides.length - 1 ? false : index++;
            slider();
            restoreInfo();
        }
    });

    renderCalendar();

    var ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
    var updatePassword;
    var stringName = 'GRUSHEVSKIY_CALENDAR_STORAGE';

    function storeInfo() {
        updatePassword = Math.random();
        $.ajax({
            url: ajaxHandlerScript,
            type: 'POST',
            cache: false,
            dataType: 'JSON',
            data: { f: 'LOCKGET', n: stringName, p: updatePassword },
            success: lockGetReady,
            error: errorHandler
        }
        );
    }

    function lockGetReady(callresult) {
        if (callresult.error != undefined)
            alert(callresult.error);
        else {
            let daysCurrMonth = document.querySelector(".days2");
            var info = escapeHTML(daysCurrMonth.innerHTML);
            function escapeHTML(text) {
                if (!text)
                    return text;
                text = text.toString()
                    .split("&").join("&amp;")
                    .split("<").join("&lt;")
                    .split(">").join("&gt;")
                    .split('"').join("&quot;")
                    .split("'").join("&#039;");
                return text;
            }
            $.ajax({
                url: ajaxHandlerScript,
                type: 'POST',
                cache: false,
                dataType: 'JSON',
                data: { f: 'UPDATE', n: stringName, v: JSON.stringify(info), p: updatePassword },
                success: updateReady,
                error: errorHandler
            }
            );
        }
    }

    function updateReady(callresult) {
        if (callresult.error != undefined)
            alert(callresult.error);
        restoreInfo();
        setTimeout(()=>{
            spinner.style.display="none";
        },500);
    }

    function restoreInfo() {
        $.ajax(
            {
                url: ajaxHandlerScript,
                type: 'POST',
                cache: false,
                dataType: 'json',
                data: { f: 'READ', n: stringName },
                success: readReady,
                error: errorHandler
            }
        );
    }

    function readReady(callresult) {
        if (callresult.error != undefined)
            alert(callresult.error);
        else if (callresult.result != "") {
            var info = JSON.parse(callresult.result);
            let daysCurrMonth = document.querySelector(".days2");
            daysCurrMonth.innerHTML = escapeHTML(info);
            function escapeHTML(text) {
                if (!text)
                    return text;
                text = text.toString()
                    .split("&amp;").join("&")
                    .split("&lt;").join("<")
                    .split("&gt;").join(">")
                    .split('&quot;').join('"')
                    .split("&#039;").join("'");
                return text;
            }

            let numArray = document.querySelectorAll(".days2 .num");
            numArray.forEach(item => {
                item.addEventListener('mousedown', fff);
                item.addEventListener('touchstart', fff);

                function fff(EO) {
                    let el = EO.target;
                    let timerId = setTimeout(() => {
                        if (!el.style.border) {
                            el.style.border = "2px solid green";
                            el.classList.add("green")
                        } else if (el.style.border == "2px solid green") {
                            el.style.border = "2px solid white";
                            el.classList.remove("green");
                            el.classList.add("white");
                        } else if (el.style.border == "2px solid white") {
                            el.style.border = "2px solid orange";
                            el.style.borderRadius = "50%";
                            el.classList.remove("white");
                        } else if (el.style.border = "2px solid orange") {
                            el.style.border = "";
                        }
                    }, 500);
                    item.addEventListener("mouseup", () => {
                        clearTimeout(timerId);
                    });
                    item.addEventListener("touchend", () => {
                        clearTimeout(timerId);
                    });
                }

            });
            let greenClasses = document.querySelectorAll(".green");
            let blackClasses = document.querySelectorAll(".white");
            let colgreen = 0;
            let colwhite = 0;
            greenClasses.forEach((item, i, arr) => {
                colgreen = arr.length;
            })
            blackClasses.forEach((item, i, arr) => {
                colwhite = arr.length;
            })

            let zp = 800 / 12 * colgreen + 100 * colwhite;
            const divZp = document.getElementById("zp");
            divZp.innerHTML = `Salary: ${Math.round(zp)} Byn`;
            divZp.style.top =
                (calendar.offsetTop + calendar.offsetHeight - divZp.offsetHeight) + "px";
            divZp.style.left =
                (calendar.offsetLeft + calendar.offsetWidth - divZp.offsetWidth) + "px";
            setTimeout(()=>{
                spinner.style.display = "none";
            },500);
                
        }
    }

    function errorHandler(jqXHR, statusStr, errorStr) {
        spinner.style.display = "none";
        alert(statusStr + ' ' + errorStr);
    }

    restoreInfo();


    document.getElementById('download').addEventListener("click", funSaveGrafic);
    const boxInput = document.querySelector("#boxInput input");
    const boxPassword = document.getElementById("boxPassword");
    const divClose = document.querySelector("#boxInput div");
    const spanInput = document.querySelector("#boxInput span");
    const pOK = document.querySelector("#boxInput p");
    function funSaveGrafic() {
        boxPassword.style.zIndex = 100;
        boxPassword.style.opacity = 1;
        boxInput.value = "";
    }
    divClose.addEventListener('click', fundivClose);
    function fundivClose() {

        boxPassword.style.opacity = 0;
        setTimeout(() => {
            boxInput.value = "";
            boxPassword.style.zIndex = 0;
            boxInput.style.display = 'block';
            pOK.style.display = "block";
            spanInput.innerHTML = "Введите пароль:";
        }, 500);

    }
    pOK.addEventListener("click", debounceSerie(funOkSave, 500, false));
    document.addEventListener("keydown", debounceSerie(funOkSaveEnter, 500, false));

    function funOkSave() {
        if (boxInput.value == "unypyrebe") {
            storeInfo();
            spinner.style.display="block";
            boxInput.value = "";
            fundivClose();
        } else {
            spanInput.innerHTML = "Неверный пароль"
            boxInput.value = "";
            boxInput.style.display = 'none';
            pOK.style.display = "none";
        }
    }
    function funOkSaveEnter(EO){
        EO=EO||window.event;
        if(EO.code == "Enter" && boxInput.style.display =="block"){
            funOkSave();
        }
    }
    function debounceSerie(func, interval, immediate) {
        var timer;
        return function () {
            var context = this, args = arguments;
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

            var minSwipe = 40;

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
        if (move == "left") {
            date.setMonth(date.getMonth() + 1);
            renderCalendar();
            index >= slides.length - 1 ? false : index++;
            slider();
            restoreInfo();
        } else if (move == "right") {
            date.setMonth(date.getMonth() - 1);
            renderCalendar();
            index <= 0 ? false : index--;
            slider();
            restoreInfo();
        }
        move = "stop";
    }

    document.getElementById('refresh').addEventListener('click', (EO) => {
        EO.target.src = "imgs/close.png"
        setTimeout(() => {
            location.reload();
        }, 500);
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

