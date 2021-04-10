<?php
$string  = file_get_contents('php://input');
$request = json_decode($string);
sendPageClient($request);


function sendPageClient($request){
  switch($request->{'name'}){
    case "home":
      replacePage("include_once('../front-end/home.html');");
      break;
    case "course":
      replacePage("include_once('../front-end/course.html');");
      break;
    case "quiz":
      replacePage("include_once('../front-end/quiz.html');");
      break;
    case "premium":
      replacePage("include_once('../front-end/premium.html');");
      break;
    case "login":
      replacePage("include_once('../front-end/login.html');");
      break;
    default:
      echo 'Not found this page!';
  }
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
