// Listen for a submit
document.querySelector(".form-mail").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();


  

  let name=document.querySelector(".name").value;
  let telefon=document.querySelector(".telefon").value;
  let mesaj=document.querySelector(".mesaj").value;
  let email=document.querySelector(".email").value;
  //   saveContactInfo(name, email, message);

  //   document.querySelector(".contact-form").reset();
try{
  sendEmail(
    name,telefon,
    mesaj,
    email
  );
}catch(e){
  localStorage.setItem('mailsended', 'false');
}
}

function sendEmail(
  name,telefon,mesaj,email
) {
  Email.send({
    // Host : "smtp.gmail.com",
    // Username : "medheedconsultancy@gmail.com",
    // Password : "mvezcwfljoqeqntf",
    // // SecureToken : "3def6893-8292-4b1b-9594-1b5226b8d044",
    // To: "info@medheedconsultancy.com",
    // From: "info@medheedconsultancy.com",

    Host : "smtp.gmail.com",
    Username : "webcontactmessages@gmail.com",
    Password : "wayihgreowgppfnn",
    To: "info@birtesmuhendislik.com",
    From: `${email}`,
    
    Subject: `${name} size bir mesaj gönderdi`,
    Body: `İsim: ${name} <br/>
         Email: ${email} <br/> 
         Telefon Numarası: ${telefon} <br/> 
         Mesaj: ${mesaj}`,
  }).then((message) =>
   localStorage.setItem('mailsended', 'true')
  
  ).catch((e) => localStorage.setItem('mailsended', 'false'))
}
