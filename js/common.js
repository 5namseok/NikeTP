$(function () {
    // 창의 width 변수
    let winWidth;

    $('.main-menu').on({
        // 마우스 진입 메소드
        mouseenter:function () {
            $('.sub-menu, .sub-bg').stop().show();
        },
        // 마우스 탈출 메소드
        mouseleave:function () {
            $('.sub-menu, .sub-bg').stop().hide();
        }
    });

    // 강제 이벤트 발생 메서드
    // 새창 오픈시에는 resize가 실행되지 않기 때문에 resize이벤트를 강제로 실행
    // $(window).trigger('resize');
    
    // 햄버거 메뉴
    

    // swiper 플러그인
    let swiperSlide = new Swiper('.Featured-slide', {

        // 모바일 기준(기본값이 모바일)
        // slidesPerView : 한 화면에 들어오는 슬라이드 갯수(auto는 css상에서 지정한 %비율만큼)
        slidesPerView:'auto',
        // 슬라이드 사이 간격
        spaceBetween:8,
        pagination:{
            // '현재 슬라이드 index/슬라이드 총수' 표기
            el:'.f-pager',
            // 클릭 가능하게
            clickable:true,
            // 버튼을 눌러 좌우로 이동
            type:'fraction'  
            // bullets : 동그라미로 표기(좌우버튼 필요 없음)
        },
        // fraction을 사용하면 navigation은 필수
        navigation: {
            prevEl:'.f-prev',
            nextEl:'.f-next'
        },
        // 반응형(화면 넓이에 따라 레이아웃 변경)
        // 기준을 잡아 그 기준에 맞게 화면에 들어올 슬라이드 갯수 설정
        breakpoints:{
            1025: {
                slidesPerView:3,
                spaceBetween:24
            },
            480: {
                slidesPerView:'auto',
                spaceBetween:16
            }
        }
    });
});

// 검색창
let search_box=document.querySelector('.search_box');
let search_input=document.querySelector('#search');
search_input.addEventListener("focus",()=>{
    search_box.classList.add("target")
})
search_input.addEventListener("focusout",()=>{
    search_box.classList.remove("target")
})