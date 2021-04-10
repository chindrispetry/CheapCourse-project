<?php require('config/config.php')?>
<?php
$val = file_get_contents('php://input');
$user = json_decode($val);
verifyUser($user);

function verifyUser($user){
  if(dataValid($user)){
    if($user){
      $db_connect = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
      $name = $user->{'name'};
      $selectPassword = "SELECT password FROM user WHERE username='$name'";
      $resultPassword = mysqli_query($db_connect,$selectPassword);
      $rowPassword = mysqli_fetch_array($resultPassword);
      if($rowPassword){
        $key = '1kaj';
        $iv = substr(hash('sha256', 'akjsnda'), 0, 16);
        $user->{'password'} = openssl_encrypt($user->{'password'},'AES-128-CBC',$key,0,$iv);

        if(strcmp($user->{'password'},$rowPassword[0])==0){
          $page = file_get_contents('../front-end/home.html');
          replacePage("include_once('../front-end/home.html');");
          $arr = array(
            'code' => 1,
            'page' => $page
          );
          echo json_encode($arr);
        }
        else{
          $arr = array(
              'code' => 0,
              'page' => 'none'
            );
          echo json_encode($arr);
        }
      }
      else{
        $arr = array(
            'code' => 0,
            'page' => 'none'
          );
        echo json_encode($arr);
      }
    }
  }
}
function dataValid($user){
  $arr = [1,1];
  if($user){
    if($user->{'name'}=='' || strlen($user->{'name'}) < 3){
      $arr[0] = 0;
    }
    if($user->{'password'}=='' || strlen($user->{'password'}) < 6){
      $arr[2] = 0;
    }
  }
  if($arr[0]==0 || $arr[1]==0)
    return false;
  return true;
}
function replacePage($page){
  $header = "include_once('../front-end/header.html');";
  $footer = "include_once('../front-end/footer.html');";
  $finalString = '<?php'."\n";
  $finalString .= $header . "\n";
  $finalString .= $page . "\n";
  $finalString .= $footer . "\n";
  file_put_contents('login.php',$finalString);
}
