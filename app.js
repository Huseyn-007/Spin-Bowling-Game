const zemin2 = document.getElementById("zemin-2");
const zemin = document.getElementById("zemin");
// const ball = document.getElementById("ball");
let pins = document.querySelectorAll(".pin");
let degree = 25;
var isOnTheZemin = false;
let isDown = false;

let left = 1300;
let torp = 312;
let isCheck = false;
let position = 0;
let iswin = false;

zemin2.addEventListener("mousedown", function (event) {
  ball.src = "assets/images/ball.gif";
  ball.style.width = "60px";
  zemin2.style.transition = "transform 0.5s ease";
  zemin2.style.transform = `rotate(-${degree}deg)`;
  degree += 25;

  setInterval(() => {
    //   console.log( ball.style.left +" - " + ball.style.top )
    if (isOnTheZemin != true && isDown == false) {
      switch (degree) {
        case 50:
            torp += 3;
       
            if (ball.style.left == "1180px" && ball.style.top == "348px") {
              ball.style.transition = "top 0.5s ease";
              left -= 5;
              torp += 70;
            }
            if (
              ball.style.top === "490px" ||
              ball.style.top === "489px" ||
              ball.style.top == "483px"
            ) {
              ball.style.transition = "top 0.5s ease";
              isOnTheZemin = true;
            }
           
          
          break;

        case 75:
          //alert(ball.style.left +" - " + ball.style.top )
       
            torp += 5;
      
            if (
              (ball.style.left == "1170px" && ball.style.top == "372px") ||
              ball.style.top == "483px" ||
              ball.style.top == "487px"
            ) {
              ball.style.transition = "top 0.5s ease";
              left -= 5;
              torp += 70;
            }
            //930px - 487px
            if (
              ball.style.top === "490px" ||
              ball.style.top === "489px" ||
              ball.style.top === "487px" ||
              ball.style.top === "478px" ||
              ball.style.top === "491px" ||
              ball.style.top === "488px"
            ) {
              ball.style.transition = "top 0.5s ease";
              isOnTheZemin = true;
            }
            isCheck = true;
          
          break;

        default:
          isCheck == true;
          torp += 20;
          break;
      }
    }
    if(degree > 75){
       if(isCheck && iswin == false){
        setTimeout(() => {
          location.reload()
        }, 2000);
      }
    }
    else if(degree <= 75){
      if (ball.style.left == "930px" || ball.style.left == "915px") {
        iswin = true;
        const audio = document.getElementById("myAudio");
        audio.play();
        pins.forEach((pin) => {
          pin.style.transition = "transform 1s, opacity 1s";
          pin.style.transform = "rotate(90deg) translateY(100px)";
          pin.style.opacity = "0";
        });
        setTimeout(() => {
          window.location.href = "game-over.htm";
        }, 2000);
        
       
      }
  
      left -= 10;
      ball.style.left = `${left}px`;
      

    }

    
    ball.style.top = `${torp}px`;
  }, 100);
});
