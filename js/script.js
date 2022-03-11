$(function () {
  $("#tabs").tabs();

    /* 移除行動裝置影片 */
    if($(window).width() < 768){
      $(".header video").remove();
  }

  /* 滑動至指定位置 */
  $("nav a").click(function () {
    var btn = $(this).attr("href");
    var pos = $(btn).offset();
    $("html, body").animate({ scrollTop: pos.top }, 'slow');
  });

  /* 滑動至頂端 */
  $("#gotop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  /* 淡出淡入 */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#gotop').stop().fadeTo('fast', 0.7);
    } else {
      $('#gotop').stop().fadeOut('fast');
    }
  });

  $('.card').smoove({
    min_width: 0,
    offest: '10%',
    opacity: 15
  });

});

let btn = document.getElementById("hamburger");
let nav = document.getElementsByTagName('nav')[0];
let hT = document.getElementsByClassName('hamT')[0].style;
let hB = document.getElementsByClassName('hamB')[0].style;
let hM1 = document.getElementsByClassName('hamM')[0].style;
let hM2 = document.getElementsByClassName('hamM')[1].style;
btn.addEventListener('click',function(){
    if(nav.style.display == "none" || nav.style.display == ""){
        nav.style.display = "block";
        hT.display = "none";
        hB.display = "none";
        hM1.transform = "rotate(30deg)";
        hM2.transform = "rotate(-30deg)";
    }else{
        nav.style.display = "none";
        hT.display = "block";
        hB.display = "block";
        hM1.transform = "rotate(0deg)";
        hM2.transform = "rotate(0deg)";
    }
})