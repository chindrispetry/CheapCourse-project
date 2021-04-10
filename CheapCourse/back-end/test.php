<?php
$pageOld = json_encode(file_get_contents('login.php'));
$pageNew = substr($pageOld,10,148);
$arr = explode(';\r\n',$pageNew);
$newStr = "include_once('../front-end/home.html')";
$arr['1'] = $newStr;
$finalString = '<?php';
foreach($arr as $value){
  $finalString .= '\n' . $value;
}
echo $finalString;



