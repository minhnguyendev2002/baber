// count down
let countDownDate = new Date("October 20, 2022 24:00:00").getTime();

let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
      count = document.querySelector("#count"),
      price = document.querySelector("#price"),
      typeOrder = document.querySelector("#type-order"),
      submitbtn = document.querySelector("#submit-btn");
let messageCheck = '';
let sumprice = 0;
let PRICE = 130000;

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
    let data = {
      name: fullname.value,
      phone: phone.value,
      adress: adress.value,
      product: `Gel vuốt tóc x ${count.value}`,
      price: PRICE
    };
    e.preventDefault();
    axios.post("https://baber-shop-b94f6-default-rtdb.asia-southeast1.firebasedatabase.app/list-order.json", data)
          .then(res => {
            alert(`Cảm ơn quý khách đã đặt hàng của chúng tôi`);
            console.log(res);
        })
        .catch(err => console.log(err))
})




