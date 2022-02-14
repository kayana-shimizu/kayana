'use strict';

//header
/*var _window = $(window),
    _header = $('.site-header'),
    heroBottom;
 
_window.on('scroll',function(){     
    heroBottom = $('.big-bg').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('fixed');   
    }
    else{
        _header.removeClass('fixed');   
    }
});
 
_window.trigger('scroll');
*/

// var navPos = jQuery( '.site-header' ).offset().top; // グローバルメニューの位置
// var navHeight = jQuery( '.site-header' ).outerHeight(); // グローバルメニューの高さ
// jQuery( window ).on( 'scroll', function() {
// 	if ( jQuery( this ).scrollTop() > navPos ) {
// 		jQuery( 'body' ).css( 'padding-top', navHeight );
// 		jQuery( '.site-header' ).addClass( 'fixed' );
// 	} else {
// 		jQuery( 'body' ).css( 'padding-top', 0 );
// 		jQuery( '.site-header' ).removeClass( 'fixed' );
// 	}
// });

$(function() {
    var offset = $('.pc-header').offset();
 
    $(window).scroll(function () {
        if ($(window).scrollTop() > offset.top) {
            $('.pc-header').addClass('fixed');
        } else {
            $('.pc-header').removeClass('fixed');
        }
    });
});


  
//インスタグラム
$('.slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 6900,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 4,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    responsive: [
      {
      breakpoint: 769,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
      }
    },
    {
      breakpoint: 426,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1.5,//スライドを画面に1.5枚見せる
      }
    }
  ]
  });
  
  //ハンバーガーメニュー
  $(".openbtn4").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav-sp").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#g-nav-sp a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn4").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav-sp").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });
  