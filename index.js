// count down
var countDownDate = new Date("October 20, 2022 24:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(hours < 10) {
    document.getElementById('hours').innerHTML = '0' + hours;
  }
  else {
    document.getElementById('hours').innerHTML = hours;
  }

  if(minutes < 10) {
    document.getElementById('minutes').innerHTML = '0' + minutes;
  }
  else {
    document.getElementById('minutes').innerHTML = minutes;
  }

  if(seconds < 10) {
    document.getElementById('seconds').innerHTML = '0' + seconds;
  }
  else {
    document.getElementById('seconds').innerHTML = seconds;
  }

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

const fullname = document.querySelector("#name"),
      phone = document.querySelector("#phone"),
      adress = document.querySelector("#adress"),
    //   combo1 = document.querySelector("#combo_1"),
    //   combo2 = document.querySelector("#combo_2"),
      count = document.querySelector("#count"),
      price = document.querySelector("#price"),
      typeOrder = document.querySelector("#type-order"),
      submitbtn = document.querySelector("#submit-btn");
let messageCheck = '';
let sumprice = 0;
let PRICE = 0;

count.addEventListener("change", function() {
    if((count.value * 130 ) < 1000) {
        sumprice = (count.value * 130 ) + '.000đ';
    }
    if((count.value * 130 ) > 1000) {
        sumprice = ((count.value * 130) / 1000).toFixed(3) + '.000đ';
        console.log(count.value * 130);
    }
    if(count.value < 2) {
        typeOrder.innerHTML = '+ 30k ship';
    }
    if(count.value >= 2) {
        typeOrder.innerHTML = 'Free ship toàn quốc';
    }
    PRICE = 130000 * count.value;
    price.innerHTML = sumprice;
    count.value = count.value < 0 ? 1 : count.value;
})

submitbtn.addEventListener("click", function(e) {
    e.preventDefault();
    Email.send({
        SecureToken : "1b2d0df2-3c45-4d1c-994d-502e0aef96b7",
        To : 'minhnguyenyh2020@gmail.com',
        From : "minhnguyendev21@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    console.log(fullname.value, phone.value, adress.value, count.value, PRICE)
})

