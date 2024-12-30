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
				let query = btn.currentTarget.dataset.query;
				boardTitle.textContent = btn.currentTarget.textContent;
				innerContent.style.display = 'flex';
				boardSection.innerHTML = '';
				if(board === 'searchSection'){
					searchFn(boardSection);
				}else if(board === 'itemSection'){
					itemFn(boardSection, query);
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
const itemFn = (ele, query)=>{
	ele.innerHTML = ``;
	if(query === 'itemSearch'){
		ele.innerHTML = `
			<section class="itemFnButton">
				<section class="total-length">검색데이터 수 : <span></span>개</section>
				<section class="buttons" data-button="registration">상품등록</section>
				<section class="buttons" data-button="copy">상품복사</section>
				<section class="buttons" data-button="correction">상품수정</section>
				<section class="buttons" data-button="delete">상품삭제</section>
				<section class="search-wrapper">
					<form name="searchFormModal" class="search-form-modal">
						<input type="text" name="searchInput" class="search-input" onfocus="document.querySelector('.search-wrapper').style.backgroundColor='#202020'" onblur="document.querySelector('.search-wrapper').style.backgroundColor='#000000'">
					</form>
				</section>
				<section class="buttons" data-button="name" data-order="Y">상품명</section>
				<section class="buttons" data-button="reg-date" data-order="Y">등록일</section>
				<section class="buttons" data-button="high-price" data-order="Y">높은가격순</section>
				<section class="buttons" data-button="low-price" data-order="Y">낮은가격순</section>
			</section>
			<section class="itemFnTitle">
				<section class="item-check">
					<div class="form-check" style="padding-left: 0;">
					  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="float: none; margin-left: 0;">
					</div>
				</section>
				<section class="item-img">
					img
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
					원산지
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
			<section class="item-list-wrapper"></section>
		`;
		const buttons = ele.querySelectorAll('.buttons');
		buttons.forEach((btns)=>{
			btns.addEventListener('click', (btn)=>{
				let dataButton = btn.currentTarget.dataset.button;
				let dataOrder = btn.currentTarget.dataset.order;
				if(dataOrder === 'Y'){
					
				}else{
					createConsole(dataButton, ele);
				}
			});
		});
		fetchDataModal(ele);
		setItemListWrapperSize(ele);
	}
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

async function fetchDataModal(ele){
	let itemMode = 'all';
	let modeCode = 'all';
	let orderBy = 'item_name';
	let inOrder = 'ASC';
	const getListWrapper = ele.querySelector('.item-list-wrapper');
	const totalLength = ele.querySelector('.total-length span');
	let data;
	let html = ``;
	try {
        data = await getFetch(`/item/itemExposureList?mode=${itemMode}&code=${modeCode}&orderBy=${orderBy}&inOrder=${inOrder}`);
        if (data.length === 0) {
		}else{
			for(let i = 0 ; i < data.length ; i++){
				html += `
					<section class="item-line" data-itemdata='${JSON.stringify(data[i])}'>
						<section class="item-check">
							<div class="form-check" style="padding-left: 0;">
							  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="float: none; margin-left: 0;">
							</div>
						</section>
						<section class="item-img">
							img
						</section>
						<section class="item-barcode">
							${data[i].barcode}
						</section>
						<section class="item-name">
							${data[i].item_name_reg}
						</section>
						<section class="item-retailPrice">
							${getCurrentMony(data[i].item_retailPrice)}
						</section>
						<section class="item-purchasePrice">
							${getCurrentMony(data[i].item_purchasePrice)}
						</section>
						<section class="item-option">
							${optionSet(data[i].option)}
						</section>
						<section class="item-code">
							${data[i].code}
						</section>
						<section class="standard">
							${data[i].item_standard}
						</section>
						<section class="item-unit">
							${data[i].item_unit}
						</section>
						<section class="item-unit-each">
							${data[i].item_origin}
						</section>
						<section class="item-brand">
							${data[i].nameKor}
						</section>
						<section class="item-registration-date">
							${data[i].registrationDate}
						</section>
						<section class="item-modify-date">
							${data[i].modifyDate}
						</section>
					</section>
				`;
			}
			getListWrapper.innerHTML = html;
			totalLength.textContent = data.length;
		}
	} catch (error) {
        console.error('Error setting items:', error);
    }
}

const optionSet = (val) =>{
	let html = ``;
	if(val === 'N'){
		html = '없음';
	}else{
		html = '<span style="color:var(--bs-orange);">있음</span>';
	}
	return html;
}

const createConsole = (dataButton, ele, itemData) =>{
// 요소 생성
    const dataConsole = document.createElement('section');
    dataConsole.setAttribute('class', 'data-board-wrapper');
    dataConsole.innerHTML = `
    	<section class="data-board">
    		
    	</section>
    `;
    // 클래스 추가로 효과 적용
    document.body.appendChild(dataConsole);
    setTimeout(() => {
        dataConsole.classList.add('data-board-wrapper-effect');
    }, 50); // 약간의 지연을 주어 transition 효과가 적용되도록 함
}