<?php
  
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
 
if (isset($_POST["btnSubmit"])) {


    $username= $_POST['username'];
    $usermail= $_POST['usermail'];
    $userphone= $_POST['userphone'];
    $usermessage= $_POST['usermessage'];
    
    $messageall= "";
    $messageall.= "Adı Soyadı: $username <br> ";
    $messageall.= "Mail Adresi: $usermail <br> ";
    $messageall.= "Telefon Numarası: $userphone <br> ";
    $messageall.= "Mesajı: $usermessage <br> ";

require 'vendor/autoload.php';
  
$mail = new PHPMailer(true);

$mail->CharSet = 'UTF-8';

try {
    $mail->SMTPDebug = 0;                                       
    $mail->isSMTP();                                            
    $mail->Host       = 'localhost';                    
    $mail->SMTPAuth   = false; 
    $mail->SMTPAutoTLS = false; 
    $mail->Username   = 'webcontactmessages@gmail.com';                 
    $mail->Password   = 'contactpassword999';                        
   // $mail->SMTPSecure = 'tls'; 
    //SMTP_SERVER: localhost;
    //$mail->Port       = 587;  
     $mail->Port       = 25;  
  
    $mail->setFrom('webcontactmessages@gmail.com','WEB-İLETİŞİM');             
   // $mail->addAddress('info@birtesmuhendislik.com');
    // $mail->addAddress('info@birtesmuhendislik.com', 'BİRTES MÜHENDİSLİK');
     $mail->addAddress('sercanaslantr@gmail.com', 'BİRTES MÜHENDİSLİK');
    $mail->addReplyTo("$usermail", "$username");
       
    $mail->isHTML(true);                                  
    $mail->Subject = 'Sitenizden iletişim formu gönderildi!!';
    $mail->Body    = $messageall;
    $mail->send();
    echo "<script>
    localStorage.setItem('mailsended', 'true'); 
     </script>";
} catch (Exception $e) {
    echo "<script>
    localStorage.setItem('mailsended', 'false'); 
     </script>";
}
}  

echo "<script>
window.close();
 </script>";


?>

