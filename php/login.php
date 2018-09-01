<?php
	header("Content-type:text/html;charset=utf-8");
	$link = mysql_connect("localhost","root","root");
	if(!$link){
		echo '数据库连接失败';
		exit;
	}
	mysql_set_charset('utf8');
	mysql_select_db('sasa');
	
	$uname = $_POST['uname'];
	$psword = $_POST['psword'];
	
	$sql = "SELECT * FROM user WHERE uname='$uname'";
	$res = mysql_query($sql);
	$arr = mysql_fetch_array($res);
	
	if($arr['uname'] == $uname){
		if($arr['psword'] == $psword){
			echo "1"; //"登录成功";
		}else{
			echo "2"; //"密码错误";
		}
	}else{
		echo "0"; //"用户名不存在";
	}
	
	
?>