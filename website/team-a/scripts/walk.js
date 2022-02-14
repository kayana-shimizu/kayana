'use strict';

//loading
$(window).on('load',function(){ $("#loader-bg").delay(3000).fadeOut('slow');//ローディング画面を3秒（3000ms）待機してからフェードアウト
});

$(function() {
  var headerHeight = 138;//固定ヘッダーの高さを入れる
  $('[href^="#"]').click(function(){
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHeight; 
    $("html, body").animate({scrollTop:position}, 200, "swing");//200はスクロールの移動スピードです
    return false;
  });
});

//ここから地図へ戻るボタン

//スクロールした際の動きを関数でまとめる
function setFadeElement(){
  var windowH = $(window).height(); //ウィンドウの高さを取得
  var scroll = $(window).scrollTop(); //スクロール値を取得
    
    //出現範囲の指定
  var contentsTop = Math.round($('.container').offset().top);  //要素までの高さを四捨五入した値で取得
  var contentsH = $('.container').outerHeight(true); //要素の高さを取得
    
    //2つ目の出現範囲の指定※任意
  //var contentsTop2 = Math.round($('#area-5').offset().top); //要素までの高さを取得
  //var contentsH2 = $('#area-5').outerHeight(true);//要素の高さを取得

    //出現範囲内に入ったかどうかをチェック
  if(scroll+windowH >= contentsTop && scroll+windowH  <= contentsTop+contentsH){
    $("#map-return").addClass("UpMove");    //入っていたらUpMoveをクラス追加
    $("#map-return").removeClass("DownMove");   //DownMoveを削除
    $(".hide-btn").removeClass("hide-btn");   //hide-btnを削除
  }//2つ目の出現範囲に入ったかどうかをチェック※任意
   // else if(scroll+windowH >= contentsTop2 && scroll+windowH <= contentsTop2+contentsH2){       
    //$("#page-top").addClass("UpMove");    //入っていたらUpMoveをクラス追加
    //$("#page-top").removeClass("DownMove");   //DownMoveを削除
  //}//それ以外は
    else{
        if(!$(".hide-btn").length){       //サイト表示時にDownMoveクラスを一瞬付与させないためのクラス付け。hide-btnがなければ下記の動作を行う
    $("#map-return").addClass("DownMove");  //DownMoveをクラス追加
    $("#map-return").removeClass("UpMove"); //UpMoveを削除 
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  setFadeElement();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  setFadeElement();/* スクロールした際の動きの関数を呼ぶ*/
});



// #page-topをクリックした際の設定
$('.map-return').click(function () {
    $('#map').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
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
  