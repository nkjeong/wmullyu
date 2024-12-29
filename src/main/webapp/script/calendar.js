"use strict";
const calendar = document.querySelector('.calendar');
const since = document.querySelector('.footer-logo > article:last-child');
if(calendar || since){
	async function setCalendar(ele, mode) {
        let data;
        try {
            data = await getFetch(`/calendar/getCalendar`);
            if(mode === 'since'){
				ele.innerHTML = `2023 - ${data.year}`;
			}else{
				ele.innerHTML = `${data.year}년 ${data.month}월 ${data.date}일 ${data.toDay}`;
			}
        } catch (error) {
            console.error('Error setting brand:', error);
        }
    }

    async function runSetCalendar() {
        await setCalendar(calendar, 'cal');
    }
    
    async function runSetSince() {
        await setCalendar(since, 'since');
    }
    runSetCalendar();
    runSetSince();
}