let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    cart.push({name: name, price: price});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('✅ تمت اضافة ' + name + ' للسلة');
}

if(document.getElementById('cartItems')){
    let cartDiv = document.getElementById('cartItems'); let total = 0;
    if(cart.length == 0){cartDiv.innerHTML = "<p>السلة فاضية</p>";} 
    else {
        cart.forEach(item => {
            cartDiv.innerHTML += `<p>${item.name} - ${item.price} جنيه</p>`;
            total += item.price;
        });
    }
    document.getElementById('total').innerText = "المجموع: " + total + " جنيه";
}

function checkout(){alert('✅ تم استلام طلبك ❤️');localStorage.clear();location.href = 'index.html';}
function confirmBooking(){
  let name = document.getElementById('bName').value;
  let phone = document.getElementById('bPhone').value;
  
  if(name == "" || phone == ""){
    alert("❌ املي الاسم والرقم");
    return;
  }
  alert("✅ تم تأكيد الحجز بنجاح يا " + name);
  localStorage.clear();
              }
