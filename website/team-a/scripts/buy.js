'use-strict';

const tab_list = document.querySelectorAll('.tab-menu');
    const content_box_list = document.querySelectorAll('.content-box');
    for(let i = 0;i < tab_list.length;i++){
        tab_list[i].addEventListener('click', tab_check,false);
    }
    function tab_check(e){
        let num;
        if(!e.target.classList.contains('is-active')){
            for(let i = 0; i < tab_list.length;i++){
                if(tab_list[i].classList.contains('is-active')){
                    tab_list[i].classList.remove('is-active');
                }
            }
            e.target.classList.add('is-active');
            for(let i = 0; i < tab_list.length;i++){
                if(tab_list[i].classList.contains('is-active')){
                    num = i;
                }
            }
            content_check(num);
            }
    }
    function content_check(number){
        for(let i = 0; i < content_box_list.length;i++){
            if(content_box_list[i].classList.contains('is-active')){
                content_box_list[i].classList.remove('is-active'); 
            } 
        }
        content_box_list[number].classList.add('is-active');
    }

      //ハンバーガーメニュー
  $(".openbtn4").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav-sp").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#g-nav-sp a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn4").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav-sp").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });
