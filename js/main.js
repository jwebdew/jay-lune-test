$(function () {
 /*  $("a").click(function (e) {
    e.preventDefault();
  }); */
  // 포트폴리오
  let portfolioView = $(".main_portfolio__list .item--click");
  let portfolioViewImage = portfolioView.find(".item--click__image img");
  let portfolioViewMobileImage = portfolioView.find(".item--click__text img");
  let portfolioViewTitle = portfolioView.find("h4");
  let portfolioViewcategory = portfolioView.find(".item__category");
  let portfolioViewText = portfolioView.find("p");

  let portfolioItemAddClass = $('.main_portfolio__list_item .item');
  let portfolioItem = $(".main_portfolio__list_item .item .item__image_wrap");
  let portfolioItemImage = portfolioItem.find('img');
  // let portfolioItemTitle = portfolioItem.find('h4');
  // let portfolioItemText = portfolioItem.find('p');

  portfolioItemImage.css('opacity', '0.4')
  portfolioItemImage.eq(0).css('opacity', '1')
  portfolioItem.mouseenter(function () {
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
      logo.src = 'img/logo_vol7.svg'

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
