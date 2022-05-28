// count down
let now = 600 * 5.9;
function countdown() {
  now--;
  let minutes = Math.floor(now / 60);
  let seconds = Math.floor(now % 60);

  document.getElementById('hours').innerHTML = '00';
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
};

setInterval(countdown, 1000);

const fullname = document.querySelector("#name"),
      phone = document.querySelector("#phone"),
      adress = document.querySelector("#adress"),
      count = document.querySelector("#count"),
      price = document.querySelector("#price"),
      typeOrder = document.querySelector("#type-order"),
      submitbtn = document.querySelector("#submit-btn");
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

function valid() {
  let pattern = {
    name: false,
    phone: false,
    adress: false,
    count: false,
  }
  if(fullname.value !== '') {
    pattern.name = true
  }
  if(/^[0-9]{10}$/.test(phone.value)) {
    pattern.phone = true
  }
  if(adress.value !== '') {
    pattern.adress = true
  }
  if(count.value !== '') {
    pattern.count = true
  }
  if(pattern.name && pattern.phone && pattern.adress && pattern.count) {
    return true;
  }
  return false;
}

submitbtn.addEventListener("click", function(e) {
  e.preventDefault();
  if(valid()) {
    let data = {
      name: fullname.value,
      phone: phone.value,
      adress: adress.value,
      product: `Gel vuốt tóc x ${count.value}`,
      price: PRICE
    };
    axios.post("https://baber-shop-b94f6-default-rtdb.asia-southeast1.firebasedatabase.app/list-order.json", data)
    .then(res => {
      alert(`Cảm ơn quý khách đã đặt hàng của chúng tôi`);
      console.log(res);
    })
    .catch(err => console.log(err))
    window.location="https://tocshopthankyou.netlify.app/";
  }
  else {
    alert(`Vui lòng nhập đủ các trường thông tin, Họ tên, SĐT ( 10 số ), Địa chỉ, Số lượng`);
  }
})




