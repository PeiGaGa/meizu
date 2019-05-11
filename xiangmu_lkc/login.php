<?php 
mysql_connect('127.0.0.1','root','123456');
mysql_query('use sz1902');

$username = $_GET['username'];
$pwd = $_GET['pwd'];

//sql
$sql = "select * from users where username='$username' and password = '$password'";
$result = mysql_query($sql);
$row = mysql_fetch_assoc($result);

if($row){
  $responseData = ['code'=>200,'message'=>'登录成功'];
}else{
  $responseData = ['code'=>-1,'message'=>'用户名或密码错误'];
}

echo json_encode($responseData);
