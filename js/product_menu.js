//상단메뉴 스크롤에 따라 보이기, 숨기기
let menuH=document.querySelector('.wrap .header')
let category=document.querySelector('.product_con .category');


window.addEventListener('scroll',_.throttle(()=>{
  console.log(window.scrollY);
  if(window.scrollY<100){
    menuH.classList.remove('fixed')
    category.classList.remove('scroll')
    category.classList.remove('up')
    category.classList.remove('down')
  } else {
    menuH.classList.add('fixed')
    category.classList.add('scroll')
  }
},300))

window.addEventListener('wheel',(e)=>{
  if(e.deltaY>0){    
    menuH.classList.add('down')
    menuH.classList.remove('up')
    category.classList.add('down')
    category.classList.remove('up')
  } else {
    menuH.classList.remove('down')
    category.classList.remove('down')
    if(window.scrollY>100){
      menuH.classList.add('up')
      category.classList.add('up')
    } else {
      menuH.classList.remove('up')
      category.classList.remove('up')
    }
  }
})

//필터 숨기기 보이기 기능
let filter_BTN=document.querySelector('.filter');
let filter_text=filter_BTN.children[0];

filter_BTN.addEventListener('click',()=>{
  if(filter_text.innerText=="필터 숨기기"){
    filter_text.innerText="필터 보기"
    category.classList.add('hidden');
  } else if(filter_text.innerText=="필터 보기"){
    filter_text.innerText="필터 숨기기"
    category.classList.remove('hidden')
  }
})

//정렬기준 클릭시 보이게
let desc_btn=document.querySelector('.desc i')
let desc_list=document.querySelector('.desc_list');

desc_btn.addEventListener('click',()=>{
  desc_btn.classList.toggle('up');
  desc_list.classList.toggle('hidden');
  desc_list.classList.toggle('show')
})


//정렬기준 클릭하면 내용 들어가게
let desc_list_li=desc_list.querySelectorAll('li');
let desc_text=document.querySelector('.desc span p')

desc_list_li.forEach(a=>{
  a.addEventListener('click',()=>{
    console.log(a.innerText)
    desc_text.innerHTML=a.innerText;
  })
})

// 카테고리 보이기 안보이기
let category_btn=document.querySelectorAll('.product_con .category .category_con .title .btn');
category_btn.forEach(e=>{
  e.addEventListener('click',()=>{
    e.classList.toggle('hidden')
    console.dir(e.parentElement.nextElementSibling)
    e.parentElement.nextElementSibling.classList.toggle('hidden')
  })
})




