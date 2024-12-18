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
		<section class="itemFnButton">
			<section>상품등록</section>
			<section>상품수정</section>
			<section>상품삭제</section>
		</section>
		<section class="itemFnTitle">
			<section class="item-check">
				<div class="form-check" style="padding-left: 0;">
				  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="float: none; margin-left: 0;">
				</div>
			</section>
			<section class="item-barcode">
				바코드
			</section>
			<section class="item-name">
				상품명
			</section>
			<section class="item-retailPrice">
				소비자가
			</section>
			<section class="item-purchasePrice">
				공급가
			</section>
			<section class="item-option">
				옵션
			</section>
			<section class="item-code">
				상품코드
			</section>
			<section class="standard">
				규격
			</section>
			<section class="item-unit">
				단위
			</section>
			<section class="item-unit-each">
				단위수량
			</section>
			<section class="item-brand">
				제조사(브랜드)
			</section>
			<section class="item-registration-date">
				등록일
			</section>
			<section class="item-modify-date">
				수정일
			</section>
			<section class="scroll-area">
			</section>
		</section>
		<section class="item-list-wrapper">
			<section class="itemFnTitle">
				<section class="item-check">
					<div class="form-check" style="padding-left: 0;">
					  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="float: none; margin-left: 0;">
					</div>
				</section>
				<section class="item-barcode">
					바코드
				</section>
				<section class="item-name">
					상품명
				</section>
				<section class="item-retailPrice">
					소비자가
				</section>
				<section class="item-purchasePrice">
					공급가
				</section>
				<section class="item-option">
					옵션
				</section>
				<section class="item-code">
					상품코드
				</section>
				<section class="standard">
					규격
				</section>
				<section class="item-unit">
					단위
				</section>
				<section class="item-unit-each">
					단위수량
				</section>
				<section class="item-brand">
					제조사(브랜드)
				</section>
				<section class="item-registration-date">
					등록일
				</section>
				<section class="item-modify-date">
					수정일
				</section>
			</section>
		</section>
	`;
	
	setItemListWrapperSize(ele);
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

const setItemListWrapperSize = (ele) => {
	let elementSize = ele.getBoundingClientRect();
	let elementSizeHeight = elementSize.height - 150;
	const getItemListWrapper = ele.querySelector('.item-list-wrapper');
	getItemListWrapper.style.height = `${elementSizeHeight}px`;
}