//채널톡 연결
/* (function () {
  var w = window;
  if (w.ChannelIO) {
    return w.console.error("ChannelIO script included twice.");
  }
  var ch = function () {
    ch.c(arguments);
  };
  ch.q = [];
  ch.c = function (args) {
    ch.q.push(args);
  };
  w.ChannelIO = ch;
  function l() {
    if (w.ChannelIOInitialized) {
      return;
    }
    w.ChannelIOInitialized = true;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
    var x = document.getElementsByTagName("script")[0];
    if (x.parentNode) {
      x.parentNode.insertBefore(s, x);
    }
  }
  if (document.readyState === "complete") {
    l();
  } else {
    w.addEventListener("DOMContentLoaded", l);
    w.addEventListener("load", l);
  }
})();

ChannelIO("boot", {
  pluginKey: "1a6d36e2-9421-497c-92d7-790776f8fa3f",
}); */

$(function () {
  $(window).mousemove(function (e) {
    //마우스위치값 구하기
    //x축 e.pageX
    //y축 e.pageY
    let mouseX = e.pageX;
    let mouseY = e.pageY;
    // console.log(mouseX)
    // console.log(mouseY)
    $(".mouse, .list_mouse").css({
      top: mouseY,
      left: mouseX,
    });
  });
  $("a").on({
    mouseenter: function () {
      $(".mouse").css({
        transform: "scale(4) translateX(15px)",
        // 'background-color' : 'unset',
      });
      $(".mouse, .list_mouse").addClass("hover");
    },
    mouseleave: function () {
      $(".mouse").css({
        transform: "scale(1)",
        "background-color": "#BFFF00",
      });
      $(".mouse, .list_mouse").removeClass("hover");
    },
  });

  let menu = $(".menu_list li");
  let list = $(".list");

  menu.click(function () {
    menu.removeClass("on");
    $(this).addClass("on");

    list.removeClass("on");
    list.eq($(this).index()).addClass("on");
  });

  $(".preparing").click(function () {
    alert("🌹 준비중입니다.");
  });

  function copyUrl() {
    var copy_url = jQuery("#copy").text();
    navigator.clipboard.writeText(copy_url).then(() => {
      alert("아이디 복사 성공!");
      return false;
    });
  }

  $(".copy").click(function () {
    copyUrl();
  });

  let gnb = document.querySelector(".gnb");
  //let gnbAll = gnb.querySelectorAll("li");

  for (let i = 0; i < gnbAll.length; i++) {
    gnbAll[i].onclick = function () {
      gnbAll.forEach(function (item) {
        item.classList.remove("on");
      });
      gnbAll[i].classList.add("on");
    };

    
  }
}); //jquery end
