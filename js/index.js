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
$('.imIn').click(function() {
	console.log("11");
	$(".acBox").show();
});
$(".name").focus();
$(".cancel").click(function() {
	$(".acBox").hide();
})
$('.addJob').click(function() {
	$(".qiuBox").show();
});
$(".cancel").click(function() {
	$(".qiuBox").hide();
})
$('.jobInformation').click(function() {
	$(".qiuBoxDetail").show();
});
$(".cancel").click(function() {
	$(".qiuBoxDetail").hide();
});
$(".issue").click(function() {
	$.ajax({
		type: "post",
		url: API,
		async: true,
		data: "",
		success: function(res) {
			console.log(res);
		},
		error: function(error) {
			console.log(error);
		}
	});
})
$.ajax({
		type: "get",
		url: API,
		async: true,
		success: function(res) {
			console.log(res);
		},
		error: function(error) {
			console.log(error);
		}
	});