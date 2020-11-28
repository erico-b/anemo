/*-------------------------
モバイルの時のボタン
--------------------------*/
$('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav').toggleClass('show');
});


/*-------------------------
ページトップボタン
--------------------------*/

$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});

/*-------------------------
ヘッダー
--------------------------*/
var _window = $(window),
    _header = $('.site-header'),
    heroBottom;
 
_window.on('scroll',function(){     
    heroBottom = $('.hero').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('fixed');   
    }
    else{
        _header.removeClass('fixed');   
    }
});
_window.trigger('scroll');


$(function()
{
	// [.syncer-acdn]にクリックイベントを設定する
	$( '.qa-text' ).click( function()
	{
		// [data-target]の属性値を代入する
		var target = $( this ).data( 'target' ) ;

		// [target]と同じ名前のIDを持つ要素に[slideToggle()]を実行する
		$( '#' + target ).slideToggle() ;

		// 終了
		return false ;
	} ) ;
}) ;