<?php require('config/config.php')?>
<?php

$val = file_get_contents('php://input');
$user = json_decode($val);
addUser($user);

function addUser($user){
    if(validateDataServer($user)){
      if($user){
        $db_connect = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);

        if(is_null($db_connect)){
          echo "eroare la conectare";
        }
        $name = $user->{'name'};
        $email = $user->{'email'};

        $selectUsername = "SELECT username FROM user WHERE username='$name'";
        $selectEmail = "SELECT email FROM user WHERE email='$email'";
      
        $resultUsername = mysqli_query($db_connect,$selectUsername);
        $resultEmail = mysqli_query($db_connect,$selectEmail);
        $row = mysqli_fetch_array($resultEmail);
        $rowUsername = mysqli_fetch_array($resultUsername);

        if($rowUsername){
          echo 2;
        }
        else if($row){
          echo 3;
        }
        else{
          $key = '1kaj';
          $iv = substr(hash('sha256', 'akjsnda'), 0, 16);
          $user->{'password'} = openssl_encrypt($user->{'password'},'AES-128-CBC',$key,0,$iv);
          $name = $user->{'name'};
          $email = $user->{'email'};
          $password = $user->{'password'};
          $User = "INSERT INTO user (username, email, password) VALUES ('$name' ,'$email','$password')";
          mysqli_query($db_connect,$User);
          mysqli_close($db_connect);
          echo 1;
        }
      }
    else {
        echo 4;
      }
    }
}
function validateDataServer($user){
  $arr = [1,1,1];
  if($user){
    if($user->{'name'}=='' || strlen($user->{'name'}) < 3){
      $arr[0] = 0;
    }
    if($user->{'email'}=='' || strlen($user->{'email'}) < 6){
      $arr[1] = 0;
    }
    if($user->{'password'}=='' || strlen($user->{'password'}) < 6){
      $arr[2] = 0;
    }
  }
  if($arr[0]==0 || $arr[1]==0 || $arr[2]==0)
    return false;
  return true;
}
