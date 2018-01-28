//mui初始化禁止左滑
mui.init({
	swipeBack: false
});
//mui('.mui-scroll-wrapper').scroll({
//	indicators: true //是否显示滚动条
//});
//轮播图
var gallery = mui('#slider');
gallery.slider({
	interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
});
$(function() {
	//	圈子活动
	$('.imIn').click(function() {
		console.log("11");
		$(".acBox").show();
	});
	$(".name").focus();
	$(".cancel").click(function() {
		$(".acBox").hide();
	})
	//	新增求职弹出框
	$('.addJob').click(function() {
		$(".qiuBox").show();
	});
	$(".cancel").click(function() {
		$(".qiuBox").hide();
	})
	//	求职详情
	$(".job").on("click", ".jobInformation", function(evt) {
		$(".qiuBoxDetail").show();
	})
	$(".cancel").click(function() {
		$(".qiuBoxDetail").hide();
	});

	queryQiuzhi();
	//	获取求职列表
	function queryQiuzhi() {
		var str = "";
		$.ajax({
			type: "get",
			url: APPLYJOBS,
			async: true,
			success: function(res) {
				console.log(res);
				$(".job").html("");
				res.forEach(function(element) {
					str = '<div class="jobInformation mui-clearfix">' +
						'<div class="jobhead mui-clearfix">' +
						'<span class="mui-pull-left">' + element.apply_job + '</span>' +
						'<span class="mui-pull-right salary">￥' + element.apply_pay + '</span>' +
						'</div>' +
						'<p class="jobcont">' + element.content + '</p>' +
						'<p>' +
						'<span> ' + element.place + '</span>' +
						'<span>' + element.education + '</span>' +
						'<span>' + element.work_year + '年</span>' +
						'<span>' + element.assume_job + '</span>' +
						'</p>' +
						'<div class="jobfoot mui-clearfix">' +
						'<span class="mui-pull-left">' + element.name + '</span>' +
						'<span class="mui-pull-right hot">鸭店推荐</span>' +
						'</div>' +
						'</div>';
					$(".job").append(str);
				});
			},
			error: function(error) {
				console.log(error);
			}
		});
	}
	//	新增求职
	$(".issue").click(function() {
		var name = $(".qiuName").val();
		var apply_job = $(".apply_job").val();
		var assume_job = $(".assume_job").val();
		var apply_pay = $(".apply_pay").val();
		var work_year = $(".work_year").val();
		var tel = $(".tel").val();
		var qq = $(".qq").val();
		var content = $(".contentIntro").val();
		var date = {
			"name": name,
			"apply_job": apply_job,
			"assume_job": assume_job,
			'apply_pay': apply_pay,
			"work_year": work_year,
			"tel": tel,
			"qq": qq,
			"content": content
		}
		console.log(date);
		$.ajax({
			type: "post",
			url: APPLYJOBS,
			async: true,
			data: date,
			success: function(res) {
				console.log(res);
				$(".qiuBox").hide();
				mui.toast('添加成功', {
					duration: 'long',
					type: 'div'
				});
				queryQiuzhi();
			},
			error: function(error) {
				console.log(error);
			}
		});
	})

	//	获取活动列表
	getInfo();

	function getInfo() {
		$.ajax({
			type: "get",
			url: GETINFO,
			success: function(res) {
				var date = JSON.parse(res)
				console.log(JSON.parse(res));
				$(".nameTitle").html(date.name);
				$(".timeT").html(date.time.slice(0, 10));
				$(".addr").html(date.addr);
				$(".style").html(date.style);
				$(".status").html(date.status);
			},
			error: function(error) {
				console.log(error);
			}
		});
	}
	
//	新增活动
	$(".confirmIn").click(function() {
		var name = $(".yourname").val();
		var phone = $(".phone").val();
		var qq = $(".qq").val();
		var date = {
			"name": name,
			"phone": phone,
			"qq": qq
		}
		console.log(date);
		$.ajax({
			type: "post",
			url: CREATE,
			async: true,
			data: date,
			success: function(res) {
				console.log(res);
				$(".qiuBox").hide();
				mui.toast('添加成功', {
					duration: 'long',
					type: 'div'
				});
				queryQiuzhi();
			},
			error: function(error) {
				console.log(error);
			}
		});
	})
})