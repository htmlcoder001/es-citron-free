'use strict';

(function(){
    const appendNull = function(num) {
        return num < 10 ? 0 + num.toString() : num;
   }
    const date = new Date(),
        curCountry = 'ES',
        dateWrap = document.querySelectorAll('.date-full'),
        monthsWrap = document.querySelectorAll('.date-month'),
        yearWrap = document.querySelectorAll('.date-year'),
        seasonWrap = document.querySelectorAll('.date-season'),
        seasonArr = {
            'EN' : ['winter', 'spring', 'summer', 'autumn'],
            'ES' : ['invierno', 'primavera', 'verano', 'otoño'],
            'RU' : ['зима', 'весна', 'лето', 'осень']
        },
        monthArr = {
            'EN' : ['January','February','March','April','May','June','July','August','September','October','November','December'],
            'ES' : ['Enero','Febrero','Marcha','Abril','Mayo','Junio',' Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
            'RU' : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            'RU_1' : ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']
        };
    dateWrap.forEach(item=>{
        const gap = +item.getAttribute('data-gap'),
            curDate = new Date(date.getTime() + gap * 86400000);
        if(item.classList.contains('date-string')){
            item.innerHTML = item.classList.contains('sklonen') ?
                `${curDate.getDate()} ${monthArr[`${curCountry}_1`][curDate.getMonth()]} ${curDate.getFullYear()}` :
                `${curDate.getDate()} ${monthArr[curCountry][curDate.getMonth()]} ${curDate.getFullYear()}`;
        } else {
            item.innerHTML = `${appendNull(curDate.getDate())}.${appendNull(curDate.getMonth()+1)}.${curDate.getFullYear()}`
        }
    })
    monthsWrap.forEach(item=>{
        const gap = +item.getAttribute('data-gap'),
            curDate = new Date(date.getTime());
        let setMonth = +curDate.getMonth();
        for(let i=0; i<Math.abs(gap); i++){
            setMonth= gap < 0 ? setMonth - 1 : setMonth + 1;
            if(setMonth==monthArr[curCountry].length){
                setMonth = 0;
            } else if (setMonth==0){
                setMonth = monthArr[curCountry].length - 1;
            }
        }
        item.innerHTML = item.classList.contains('sklonen') ?
                `${monthArr[`${curCountry}_1`][setMonth]}` :
                `${monthArr[curCountry][setMonth]}`;
    })
    yearWrap.forEach((item)=>{
        const gap = +item.getAttribute('data-gap'),
            curDate = new Date(date.getTime());
        item.innerHTML = +curDate.getFullYear() + gap;
    })
    seasonWrap.forEach((item)=>{
        const curDate = new Date(date.getTime()),
            curSeason = parseInt((+curDate.getMonth()+1)/3);
            
        item.innerHTML = seasonArr[curCountry][curSeason];
    })
}());