//ページトップボタンの表示
window.onscroll=function(evt){
    const position=document.documentElement.scrollTop || document.body.scrollTop;
    console.log(position);

    /*
    positionの値が300以上の時は
    #page-topにクラス名「open」を追加
    それ以外の時は
    #page-topにクラス名「open」を削除
    */

    if(position>=300){
        document.getElementById('page-top').classList.add('open')
    }else{
        document.getElementById('page-top').classList.remove('open')
    }
};

$(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
