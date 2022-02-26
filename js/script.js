window.onload = function () {
   
    
    // 모달창 닫기
    $('.modal-close').click(function(){
        $('.modal').hide();
    });
    
     // 햄버거 메뉴 관련
     var burger = $('.menu-trigger');
     burger.each(function(index) {
         var $this = $(this);
         $this.on('click', function(e) {
             // href 를 제거한다.
             e.preventDefault();
             $(this).toggleClass('active-1');
             // 메뉴를 펼친다.
             $('.toggle-menu').toggleClass('toggle-menu-open');
             // 만약 메뉴가 펼친 상태라면 스크롤 막는다.
             var temp = $('.toggle-menu').hasClass('toggle-menu-open');
             if (temp == true) {
             } else {
             }
 
         });
     });

    // 윈도우 사이즈를 체크해서
    // 너비에 따라서 햄버거 메뉴 class 추가/삭제
    $( window ).resize(function() {
        //창크기 변화 감지
        var vw = $(window).width();
        
        if(vw > 768) {
         $('.menu-trigger').removeClass('active-1');
         $('.toggle-menu').removeClass('toggle-menu-open');
         $('.fix-banner').show();
         // 모든메뉴 닫기
         mb_cate_list.hide();
         mb_cate_tit.removeClass('mb-cate-tit-open');
        }
 
     });
    // ---------------------------------  //
    // 모바일 메뉴 관련 
    var mb_cate_tit = $('.mb-cate-tit');
    var mb_cate_list = $('.mb-cate-list');
    $.each(mb_cate_tit, function(index, item){

        $(this).click(function(){           
            // mb-cate-tit-open 존재여부
            var temp = $(this).hasClass('mb-cate-tit-open');
            if(temp == true) {
               mb_cate_list.eq(index).stop().slideUp(); 
               $(this).removeClass('mb-cate-tit-open');
              
            }else{
               mb_cate_list.eq(index).stop().slideDown(); 
               $(this).addClass('mb-cate-tit-open');
            }

        });

    });

    // --------------------------------- //

    // visual 영역 swiper
    var sw_visual = new Swiper('.sw_visual', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
        },
        speed: 1500,
        scrollbar: {
            el: ".sw_visual_sc",
            hide: false,
        },
        pagination: {
            el: '.sw_visual_pg',
            type: 'fraction',
        renderFraction: function(currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' <span>|</span> ' + '<span class="' + totalClass + '"></span>';
        }
      }
    });

    $('.sw_visual_next').click(function () {
        sw_visual.slideNext(500, function () { });
    });

    $('.sw_visual_prev').click(function () {
        sw_visual.slidePrev(500, function () { });
    });

    $('.visual').mouseenter(function () {
        sw_visual.autoplay.stop();
    });

    $('.visual').mouseleave(function () {
        sw_visual.autoplay.start();
    });

    // 새로운 슬라이드가 모션이 시작되면 좌,우측 버튼을 처리
    $('.sw_visual_prev').hide();
    $('.sw_visual_next').show();

    // 전체 슬라이드 개수를 자동으로 파악한다.
    var totalVisual = $('.sw_visual .swiper-slide').length;
    totalVisual = totalVisual - 1;

    sw_visual.on('slideChangeTransitionStart', function () {

        if (sw_visual.realIndex == 0) {
            // 첫 번째 페이지 이므로 이전 버튼 숨기기
            $('.sw_visual_prev').hide();
            $('.sw_visual_next').show();

        } else if (sw_visual.realIndex == totalVisual) {
            // 마지막 페이지 이므로 다음 버튼 숨기기
            $('.sw_visual_prev').show();
            $('.sw_visual_next').hide();

        } else {
            // 모든 버튼 보여주기
            $('.sw_visual_prev').show();
            $('.sw_visual_next').show();
        }

    });

    // 신상품 영역 swiper
    new Swiper('.sw_new', {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        navigation: {
            nextEl: ".sw_new_next",
            prevEl: ".sw_new_prev",
        },
        pagination: {
            el: ".sw_new_pg",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 5,
                slidesPerGroup: 2,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 5,
                slidesPerGroup: 3,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 5,
                slidesPerGroup: 5,
            }
        }
    });

    // 배너 1 영역 swiper
    new Swiper('.sw_banner_1', {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
        navigation: {
            nextEl: ".sw_banner_1_next",
            prevEl: ".sw_banner_1_prev",
        },
        breakpoints: {
            960: {
                slidesPerView: 2,
                spaceBetween: 5,
                allowTouchMove: false,
            }
        }
    });
    // 베스트 영역 swiper
    new Swiper('.sw_best', {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        navigation: {
            nextEl: ".sw_best_next",
            prevEl: ".sw_best_prev",
        },
        pagination: {
            el: ".sw_best_pg",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 5,

                slidesPerGroup: 2,

            },
            768: {
                slidesPerView: 3,
                spaceBetween: 5,

                slidesPerGroup: 3,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 5,

                slidesPerGroup: 5,
            }
        }
    });
    // 배너2 영역
    new Swiper('.sw_banner_2', {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
        navigation: {
            nextEl: ".sw_banner_1_next",
            prevEl: ".sw_banner_1_prev",
        },
        breakpoints: {
            960: {
                slidesPerView: 2,
                spaceBetween: 6,
                // 터치슬라이드를 하지 않는다.
                allowTouchMove: false,
            }
        }
    });

    // MD 영역 swiper
    new Swiper('.sw_md', {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        navigation: {
            nextEl: ".sw_md_next",
            prevEl: ".sw_md_prev",
        },
        pagination: {
            el: ".sw_md_pg",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 5,

                slidesPerGroup: 2,

            },
            768: {
                slidesPerView: 3,
                spaceBetween: 5,

                slidesPerGroup: 3,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 5,

                slidesPerGroup: 5,
            }
        }
    });

    // campaign 영역 swiper
    new Swiper('.sw_camp', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".sw_camp_next",
            prevEl: ".sw_camp_prev",
        },
        breakpoints: {
            960: {
                slidesPerView: 2,
                spaceBetween: 6,
            }
        }
    });

    // 지금 스크롤 여부를 파악하는 것을 저장해 둔다.
    var scActive;

    // header 에 마우스가 hover하면 header_focus 를 적용한다.
    $('.header').mouseenter(function () {
        if (scActive == true) {
            return;
        }
        $('.header').addClass('header_focus');
    });

    // header 에 마우스가 Out하면 header_focus 를 해제한다.
    $('.header').mouseleave(function () {
        if (scActive == true) {
            return;
        }
        $('.header').removeClass('header_focus');
    });

    // 새로고침을 한 경우에 대한 처리
    // 스크롤바가 이동한 거리 체크
    var scY = $(window).scrollTop();
    if (scY > 0) {
        scActive = true;
        var checkH = $('.header').hasClass('header_focus');
        if (checkH != true) {
            $('.header').addClass('header_focus');
        }
    } else {
        scActive = false;
        $('.header').removeClass('header_focus');
    }


    // 스크롤 처리 기능 관련
    $(window).scroll(function () {

        // 스크롤바가 이동한 거리 체크
        var scY = $(window).scrollTop();
        if (scY > 0) {
            scActive = true;
            var checkH = $('.header').hasClass('header_focus');
            if (checkH != true) {
                $('.header').addClass('header_focus');
            }
        } else {
            scActive = false;
            $('.header').removeClass('header_focus');
        }

    });

    // favo 기능
    var favoCount = 0;
    $('.count').text(favoCount);
    var favo = $('.favo');
    $.each(favo, function () {
        $(this).attr('data-favo', 0);

        $(this).click(function () {
            // 현재 data-favo 를 알아낸다.
            var temp = $(this).attr('data-favo');

            if (temp == 0) {

                favoCount++;


                $(this).attr('data-favo', 1);
                $(this).find('img').attr('src', 'images/heart_focus.png');
                window.setTimeout(function () {
                    alert('위시리스트에 추가되었습니다.');
                }, 500);
            } else {

                favoCount--;

                $(this).attr('data-favo', 0);
                $(this).find('img').attr('src', 'images/heart.png');
            }


            // 변화가 일어났으니 내용을 변경한다.
            $('.count').text(favoCount);
        });
    });

    //검색창 기능
    $('.search-open').click(function (e) {
        //기본 href 기능을 막는다
        e.preventDefault();

        $('.good-search').addClass('good-search-focus');
    });

    $('.good-search-close').click(function () {

        $('.good-search').removeClass('good-search-focus');
    });
}
