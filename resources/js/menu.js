$(function() {
  var btn_html = $('#login-box').html();
  $('#login-box2').html(btn_html);
  $('#login-box3').html(btn_html);

  $('#login-box, #login-box2, #login-box3').on('click', '.btn-pop-search', function(e) {
    e.preventDefault();
    $('#hd_sch_wrapper').bPopup();
  });

  var lnb_idx = 0;
  var lnb_size = 4;
  var $lnb_lis = $('#lnb>ul>li');
  var lnb_li_cnt = $lnb_lis.length;
  function show_lnb_menu() {
    $lnb_lis.removeClass('hide');
    $lnb_lis.each(function (index, element) {
      var $this = $(element);
      
      if(index < lnb_idx) {
        $this.addClass('hide');
      } 
      if(index >= (lnb_idx + lnb_size)) {
        $this.addClass('hide');
      }
    });
  }
  show_lnb_menu();


  $('#menu-ctl .prev').mouseenter(function (e) {
    e.stopPropagation();
  });
  $('#menu-ctl .prev').click(function (e) { 
    e.preventDefault();

    if(lnb_idx < (lnb_li_cnt - lnb_size)) lnb_idx++;
    else lnb_idx = 0;
    show_lnb_menu();
  });
  

  $("#lnb ul.depth1 > li").mouseenter(function() {
    $(this)
      .find(">ul")
      .stop()
      .slideDown(400);
  });
  $("#lnb ul.depth1 > li").mouseleave(function() {
    $(this)
      .find(">ul")
      .stop()
      .slideUp(400);
  });
  $("#lnb ul.depth2 > li").mouseenter(function() {
    $(this)
      .find(">ul")
      .stop()
      .show(400);
  });
  $("#lnb ul.depth2 > li").mouseleave(function() {
    $(this)
      .find(">ul")
      .stop()
      .hide(400);
  });

  //var header_offset_top = $('#header').offset().top;
  var header_offset_top = 90;
  var $header = $("#header");
  $(window).scroll(function() {
    if ($(window).scrollTop() > header_offset_top) {
      $header.addClass("fixed");
    } else {
      $header.removeClass("fixed");
    }
  });

  //모바일
  $("#btn-menu-m").on("click", function(e) {
    e.preventDefault();
    var $btn = $(this);
    var $menu_box = $("#m-lnb-wrapper");
    if (!$btn.hasClass("active")) {
      $btn.addClass("active");
      $menu_box.addClass("on");
    } else {
      $btn.removeClass("active");
      $menu_box.removeClass("on");
    }
  });
});

$(function() {
  $("#m-lnb>ul li>span").click(function(e) {
    var $li = $(this).parent();
    if (!$li.hasClass("on")) {
      var $ul = $li.parent();
      $ul.find(">li").each(function() {
        var $e_li = $(this);
        if ($li[0] != $e_li[0]) {
          $e_li.removeClass("on");
          $e_li
            .find(">ul")
            .stop()
            .slideUp();
        }
      });
      $li.addClass("on");
      $li
        .find(">ul")
        .stop()
        .slideDown();
    } else {
      $li.removeClass("on");
      $li
        .find(">ul")
        .stop()
        .slideUp();
    }
  });
});

$(function() {
  $(".select-nav button,.select-nav .down").click(function() {
    var $select = $(this).parent();
    if (!$select.hasClass("on")) {
      $select.addClass("on");
      $select
        .find(">ul")
        .stop()
        .slideDown();
    } else {
      $select.removeClass("on");
      $select
        .find(">ul")
        .stop()
        .slideUp(400);
    }
  });
  /*
  $(".select-nav .select").mouseleave(function() {
    var $select = $(this);
    $select.removeClass("on");
    $select
      .find(">ul")
      .stop()
      .slideUp(400);
  });
  */
});