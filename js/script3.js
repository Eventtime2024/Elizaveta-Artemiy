$(window).on( 'load', function() {
    $('html, body').animate({scrollTop : 0});
    });

    let date=new Date("August 2 2024 00:00:00");
function counts(){
    let now= new Date();
    gap=date - now;

  let days =Math.floor(gap/1000/60/60/24)
  let hours =Math.floor(gap/1000/60/60)%24;
  let minutes=Math.floor(gap/1000/60)%60;
  let seconds=Math.floor(gap/1000) % 60;
  let formatted_days = days.toString().padStart(2, '0');
  let formatted_hours = hours.toString().padStart(2, '0');
  let formatted_minutes = minutes.toString().padStart(2, '0');
  let formatted_seconds = seconds.toString().padStart(2, '0');
 $("#d").text(formatted_days)
 $("#h").text(formatted_hours) ;
  $("#m").text(formatted_minutes);
  $("#s").text(formatted_seconds);
  if(gap<0){
    $("#tillwedding").html("<p>ДЕНЬ СВАДЬБЫ"+"<br>"+"02.08.2024</p>")
    $("#group").text(" ")
  }
  if(days<2){
   $(".lastpart").css("display","none")
  }

}
counts();
setInterval(counts,1000);


let audio=document.getElementById("myAudio")
 $("#play").click(function(){
  if(($("#play").css("width")) == "50px"){
      $("#play").css("width", "30px");
      $("#play").css("height", "30px");
      audio.pause();
      audio.currentTime = 0;
  } 
  else {
      $("#play").css("width","50px");
      $("#play").css("height","50px");
      audio.play();
  }
});

$(document).on("contextmenu", function(e) {
  e.preventDefault();
});


function sendMail(e) {

  let params = {
      choose: document.querySelector('input[name="choose"]:checked').value,
      guestname: document.getElementById("guestname").value,
      guestnumber: document.getElementById("guestnumber").value,
  };

  const serviceID = "service_6lkai53";
  const templateID = "template_xpktn5a";
  emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
          (document.querySelector('input[name="choose"]:checked').value = ""),
              (document.getElementById("guestname").value = ""),
              (document.getElementById("guestnumber").value = ""),
              console.log(res);
          console.log("Succesfully");
          window.location.reload();
      })
      .catch((err) => console.log(err));
}

const sendMailbtn = document.querySelector("#sendMail");

sendMailbtn.addEventListener("click", (e) => {
  e.preventDefault()
  sendMail();
 alert("сообщение отправлено");
});
