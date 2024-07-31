"use strict";
const searchSection = document.querySelector('.leftSection .searchSection');
const itemSection = document.querySelector('.leftSection .itemSection');
const memberSection = document.querySelector('.leftSection .memberSection');
const noticeSection = document.querySelector('.leftSection .noticeSection');
const innerContent = document.querySelector('.leftSection .innerContent');
const boardTitle = document.querySelector('.leftSection .boardTitle');

const createBoard = (board) => {
	const boardSection = document.querySelector('.leftSection .boardSection');
	if(board === 'searchSection'){
		
	}else{
		rect(300, innerContent);
		const leftSectionBtns = document.querySelectorAll(`.${board} section:not(:first-child)`);
		const boardClose = document.querySelector('.leftSection .boardCO');
		leftSectionBtns.forEach((btns)=>{
			btns.addEventListener('click', (btn)=>{
				boardTitle.textContent = btn.currentTarget.textContent;
				innerContent.style.display = 'flex';
				boardSection.innerHTML = '';
				if(board === 'searchSection'){
					searchFn(boardSection);
				}else if(board === 'itemSection'){
					itemFn(boardSection);
				}else if(board === 'memberSection'){
					memberFn(boardSection);
				}else if(board === 'noticeSection'){
					noticeFn(boardSection);
				}
			});
		});
		boardClose.addEventListener('click', (btn)=>{
			innerContent.style.display = 'none';
		});
	}
}

if(searchSection){
	createBoard('searchSection');
}
if(itemSection){
	createBoard('itemSection');
}
if(memberSection){
	createBoard('memberSection');
}
if(noticeSection){
	createBoard('noticeSection');
}

const searchFn = (ele)=>{
	console.log(ele);
}
const itemFn = (ele)=>{
	ele.innerHTML = `
		<section>itemFn</section>
	`;
}
const memberFn = (ele)=>{
	ele.innerHTML = `
		<section>
			
		</section>
	`;
}
const noticeFn = (ele)=>{
	ele.innerHTML = `
		<section>noticeFn</section>
	`;
}