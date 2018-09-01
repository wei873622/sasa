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
	
	
	$sql1 = "SELECT * FROM user WHERE uname='$uname'";
	$res1 = mysql_query($sql1);
	$arr = mysql_fetch_array($res1);
	
	if($arr){
		echo "2";  //"用户名已存在";
	}else{
		$sql2 = "INSERT INTO `user`( `uname`, `psword`) VALUES ('$uname','$psword')";
		$res2 = mysql_query($sql2);
		if($res2){
			echo "1";  //"注册成功";
		}else{
			echo "0";  //"注册失败";
		}
	}
	
	
	
	
	
?>