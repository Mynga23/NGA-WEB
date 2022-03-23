// var btn = document.querySelector('.dn');
// var hien = document.querySelector('.auth-form');
// var daux = document.querySelector('.daux');
// var boddy = document.querySelector('#pape-wraper');
// var buton = document.querySelector('.btn_btn');
// btn.addEventListener('click',function(){
//     hien.classList.add('hien');
// });
// daux.addEventListener('click',function(){
//     hien.classList.remove('hien');
// });
// buton.addEventListener('click',function(){
// 	boddy.classList.remove('hien');
// });

function btn(){
  if(confirm("Sản phẩm đã được thêm vào giỏ hàng, nhấn Ok để thanh toán") == true){
    location.assign("shoppingcart.html");
  }else{
    location.assign("indext.html");
  }

}