; (function ($) {
  $.fn.tl_quickmenu = function (new_option) {
    var options = {
      speed: 300,   //속도
      direction: 'right', //방향
      left: 0,      //오픈상태 위치
      right: 0,     //오픈상태 위치
      useImgIcon: true //아이콘을 이미지로 사용할 때 _on, _off 로 조정
    };

    $.extend(options, new_option);
    return this.each(function () {
      var $this = $(this);
      var $menu = $this.find('.qm_menu');
      var $content = $this.find('.qm_content');
      var $btn_close = $this.find('.qm_btn_close');
      var opened = false;
      var closed_pos;
      var opened_pos;
      if (options.direction == 'right') {
        closed_pos = $this.css('right').slice(0, -2);
        opened_pos = options.right
      } else {
        closed_pos = $this.css('left').slice(0, -2);
        opened_pos = options.left
      }
      var current = oldCurrent = null;


      function addEvent() {
        $menu.find('.qm_subject').click(function () {
          current = $(this).parent().index();
          opened = true;
          doAnimate()
        });
        $btn_close.click(function () {
          opened = false;
          doAnimate();
          if (options.useImgIcon) {
            $title = $menu.eq(oldCurrent).find('.qm_subject img');
            srcReplace($title, '_on', '_off');
          }
        })
      }

      addEvent();

      function doAnimate() {
        $menu.removeClass('active');
        $menu.eq(current).addClass('active');
        $content.hide();
        $menu.eq(current).find('.qm_content').show();

        if (options.useImgIcon) {
          var $img;
          $img = $menu.eq(oldCurrent).find('.qm_subject img');
          srcReplace($img, '_on', '_off');
          $img = $menu.eq(current).find('.qm_subject img');
          srcReplace($img, '_off', '_on');
        }
        oldCurrent = current;
        if (opened) {
          if (options.direction == "right") {
            $this.stop().animate({
              'right': opened_pos
            }, options.speed)
          } else {
            $this.stop().animate({
              'left': opened_pos
            }, options.speed)
          }
        } else {
          if (options.direction == "right") {
            $this.stop().animate({
              'right': closed_pos
            }, options.speed)
          } else {
            $this.stop().animate({
              'left': closed_pos
            }, options.speed)
          }
        }
      }

      function srcReplace($el, searchStr, replaceStr) {
        var src = $el.attr('src');
        if (String(src).search(searchStr) != -1) {
          $el.attr('src', src.replace(searchStr, replaceStr));
        }
      }
    })
  }
})(jQuery);
