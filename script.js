// تفعيل القائمة في الموبايل
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if(menuBtn){
  menuBtn.addEventListener('click', ()=>{
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
  });
}

// حفظ المستخدم في localStorage
function register(){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  if(name && email && pass){
    localStorage.setItem('user', JSON.stringify({name,email,pass}));
    alert('تم انشاء الحساب بنجاح');
    window.location.href = 'index.html';
  }
}

function login(){
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  const user = JSON.parse(localStorage.getItem('user'));
  if(user && user.email === email && user.pass === pass){
    alert('مرحبا بك ' + user.name);
    window.location.href = 'home.html';
  }else{
    alert('البريد او كلمة السر خطأ');
  }
}