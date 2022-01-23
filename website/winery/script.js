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


function slideAnime(){
	//====上に動くアニメーションここから===
		$('.upAnime').each(function(){
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            // 上から下へ表示するクラスを付与
            // テキスト要素を挟む親要素（上）とテキスト要素を元位置でアニメーションをおこなう
            $(this).addClass("slideAnimeUpDown");
            // 要素を上枠外に移動しCSS アニメーションで上から元の位置に移動
            $(this).children(".upAnimeInner").addClass("slideAnimeDownUp");
            // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
            }else{
            // 上から下へ表示するクラスを取り除く
            $(this).removeClass("slideAnimeUpDown");
            $(this).children(".upAnimeInner").removeClass("slideAnimeDownUp");
            }
            });
	}
	
    // 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		slideAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

    

    $(".openbtn").click(function () {//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    });
    
    $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
        $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
    });


    