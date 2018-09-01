//获取验证码
function testCode(n){
			var arr = [];
			for(var i = 0; i < n; i++){
				var num = parseInt(Math.random()*100);
				if(num >= 0 && num <= 9){
					arr.push(num);
				}else if(num >= 65 && num <= 90){
					var str = String.fromCharCode(num);
					arr.push(str);
				}else if(num >= 17 && num <= 42){
					var str1 = String.fromCharCode(num+80);
					arr.push(str1);
				}else{
					i--;
					//避免消耗循环的次数 也就是当他循环到不是这几个数的时候再让他随机一次
				}
			}
			return arr.join("");
		}

$('.kbq').click(function(){
	$('#kbq').text(testCode(4));  
})


//用户登录
$('#denglu').click(function(){
	$.ajax({
		method : 'post',
		url : "php/login.php",
		data : `uname=${$('#uname').val()}&psword=${$('#psword').val()}`,
		success : function(data){
			if(data == "0"){
					alert('用户名不存在');
				};
				if(data == "2"){
					alert('密码错误');
				};
				if(data == "1"){
					$.cookie('uname',`${$('#uname').val()}`,{expires:7});
					location.href = "index.html";
					
				}
		}
	})
})