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


//手机号正则
$("#uname").blur(function(){
	let oValue = $("#uname").val();
	 if(!(/^1(3|4|5|7|8)\d{9}$/.test(oValue))){ 
          alert('手机号码格式错误！');
         
    }	
})

//密码正则      6-16位数字字母
let oPsword = document.getElementById("psword");
var pPattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
$("#psword").blur(function(){
	if(oPsword.value == ""){
		alert("请输入密码！");
	}else{
		let oValue = oPsword.value;
		if(!(pPattern.test(oValue))){
			
			alert("由6-16位数字和字母组成");
		}
	}
})

//第二遍输密码
$('#psword_2').blur(function(){
	if(!$('#psword_2').val() == $('#psword').val()){
		alert('密码不一致');
	}
})


//注册用ajax
$("#zhuce").click(function(){
//	if(/^1(3|4|5|7|8)\d{9}$/.test($('#mobile').val()) && /\w{4}/.test($('#msg').val()) && pPattern.test($('#password2').val())){
		$.ajax({
			method : "post",
			url : "php/register.php",
			data : `uname=${$('#uname').val()}&psword=${$('#psword').val()}`,
			success : function(data){				
				if(data == "2"){
					alert("该手机号已注册");
				};
				if(data == "0"){
					alert("服务器繁忙，请重新注册");
				};
				if(data == "1"){
					alert("注册成功，请登录");
					location.href = '../login.html';
				}
			}
		})
//	}
})