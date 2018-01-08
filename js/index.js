mui.init({
	swipeBack: false
});
mui('.mui-scroll-wrapper').scroll({
	indicators: true //是否显示滚动条
});
var gallery = mui('#slider');
gallery.slider({
	interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
});
$('.imIn').click(function(){
	console.log("11");
	$(".imInbox").show();
});
$(".name").focus();
$(".cancel").click(function(){
	$(".imInbox").hide();
})
