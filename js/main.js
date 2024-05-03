$(function () {
 /*  $("a").click(function (e) {
    e.preventDefault();
  }); */


  let mainTabMenu = document.querySelectorAll('.main_data__menu li');
  let tabContent = document.querySelectorAll('.main_data__list');

  for(let i = 0; i < tabContent.length; i++) {
    mainTabMenu[i].addEventListener('click', () => {
      mainTabMenu.forEach((item) => {
          item.classList.remove('on')
        })
        mainTabMenu[i].classList.add('on');

        tabContent.forEach((item) => {
          item.classList.remove('on')
        })
        tabContent[i].classList.add('on');
    });
  }



  // 포트폴리오
  // let $portfolioId = $('#protfolio');
  let $portfolioId = $('#protfolio');
  let portfolioViewWrap = $('.main_portfolio__list');
  let portfolioView = $(".main_portfolio__list .item--click");
  let portfolioViewImage = portfolioView.find(".item--click__image img");
  let portfolioViewMobileImage = portfolioView.find(".item--click__text img");
  let portfolioViewTitle = portfolioView.find("h4");
  let portfolioViewcategory = portfolioView.find(".item__category");
  let portfolioViewText = portfolioView.find("p");

  let portfolioItemWidth = $('.protfolio-slide_wrap');
  let portfolioSlies = $('.main_portfolio__list_item');
  let portfolioItemAddClass = $('.main_portfolio__list_item .item');
  let portfolioItem = $(".main_portfolio__list_item .item .item__image_wrap");
  let portfolioItemImage = portfolioItem.find('img');
  // let portfolioItemTitle = portfolioItem.find('h4');
  // let portfolioItemText = portfolioItem.find('p');

  let portfolioBtnPrev = $portfolioId.find('.arrow-prev');
  let portfolioBtnNext = $portfolioId.find('.arrow-next');
  let slidePageAll = $portfolioId.find('.page_all');
  let slidePageNum = $portfolioId.find('.page_num');
  let prograssBar = $portfolioId.find('.prograss-bar span');
  let slidePage = 0;


  slidePageAll.text(portfolioViewImage.length)

  portfolioItemWidth.css('width', portfolioViewWrap.width())
  let $prograssBarWidth = 100 / portfolioViewImage.length
  prograssBar.css('width', $prograssBarWidth + '%')


  portfolioBtnNext.click(function(){
    slidePage++;
    console.log(slidePage)
    console.log(portfolioViewImage.length)
    if(portfolioSlies.length <= slidePage) {
      slidePage = 0;
    }
    let slidePageAdd = slidePage + 1 
    slidePageNum.text(slidePageAdd);
    prograssBar.css('width', $prograssBarWidth * slidePageAdd + '%');

    portfolioSlies.removeClass('protfolio-slides');
    portfolioSlies.eq(slidePage).addClass('protfolio-slides')
    portfolioSlies.css('left', -portfolioViewWrap.width() * slidePage)
    // $('.protfolio-slides').css('left', 0)
   
  });




  portfolioItemImage.css('opacity', '0.4')
  portfolioItemImage.eq(0).css('opacity', '1')
  portfolioItem.click(function () {
    let thisImage = $(this).find('img').attr('src');
    //console.log(thisImage.find('.item__category').text())
    let thiscategory = $(this).next().find('.item__category').text();
    let thisTitle = $(this).next().find('h4').text();
    let thisImageFileName = $(this).next().find('h4 span').text();
    let thisText = $('.main_portfolio__list_item .item .item__info').eq($(this).index()).text();
     
    portfolioViewImage.attr("src", thisImage);
    portfolioViewMobileImage.attr(
      "src",
      "img/portfolio/" + thisImageFileName + "-모바일.jpg"
    );
    portfolioViewTitle.text(thisTitle);
    portfolioViewText.text(thisText);
    portfolioViewcategory.text(thiscategory);

    portfolioView.addClass("on");
    portfolioItemAddClass.removeClass('item-view');
    $(this).parent().addClass('item-view');

    portfolioItemImage.css('opacity', '0.4')
    $(this).find('img').css('opacity', '1')
  });
  
  portfolioItem.mouseleave(function () {
    portfolioView.removeClass("on");
  });


  //포트폴리오 슬라이드




  //자주묻는질문
  let faq = document.querySelectorAll(".main_faq .list ul");
  //let faqText = document.querySelectorAll(".faq_text");

  for (let i = 0; i < faq.length; i++) {
    faq[i].onclick = function () {
      if (faq[i].classList.contains("on")) {
        faq[i].classList.remove("on");
      } else {
        faq.forEach(function (item) {
          item.classList.remove("on");
        });

        faq[i].classList.add("on");
      } //if
    }; //onclick
  } //for






  //스크롤 이벤트 시작
  let header = document.querySelector('.header');
  let headerTop = header.offsetTop;
  let logo = document.querySelector('.header__logo img');

  const motion = document.querySelector('#motion');
  const motionTop = motion.offsetTop;

  const topBtn = document.querySelector('#top-btn');

  window.addEventListener('scroll', () => {
    let scrollBar = window.scrollY;
    if(headerTop < scrollBar) {
      header.classList.add('on');
     logo.src = 'img/logo_vol6.svg'
    } else {
      header.classList.remove('on')
      logo.src = 'img/logo_vol6_notext.svg'

    }

    if(200 < scrollBar) {
      topBtn.classList.add('on');
    } else {
      topBtn.classList.remove('on');
    }


  });

    
  //top버튼 //javascript 방식은 브라우저에서 설정해야 부드럽게 적용이 되므로
  //jquery 를 이용하여 top버튼 설정이 사용자들에게 효과를 제공할 수 있음.
  
  /* const topBtn = document.querySelector('#top-btn'); 
  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  });  */

  $('#top-btn').click(function (event) {
		event.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 300);
	});


  //캘린더
  var options = {
    showDay: true,
    showFullDayName: true,
    showToday: true,
  };

  var date = new Date();
  var html = weekHTML(date, options);
  $(".calendar-yearmonth").html(
    date.getFullYear() + "년 " + (date.getMonth() + 1) + "월"
  );
  $("#calendar").html(html);

   
}); //jquery end
