'use strict';

$('#wrapper').multiscroll({
  anchors: ['area1', 'area2', 'area3', 'area4', 'area5', 'area6', 'area7', 'area8', 'area9'], //セクションとリンクするページ内アンカーになる名前
  menu: '#menu', //上部ナビゲーションのメニュー設定
  navigation: true, //右のナビゲーション出現、非表示は false
  navigationTooltips: ['お米ができるまで', '土づくり', '種もみ', '種まき', '苗だし', '田植え', '草刈り', '稲刈り', 'ぶなの里'], //右のナビゲーション現在地時に入るテキスト
  loopTop: true, //最初のセクションを上にスクロールして最後のセクションまでスクロールするかどうかを定義します。
  loopBottom: true, //最後のセクションを下にスクロールして最初のセクションまでスクロールするかどうかを定義します。
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
  