// Mobil menü toggling ve form doğrulama
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if(!expanded){
      mainNav.setAttribute('aria-hidden','false');
    } else {
      mainNav.setAttribute('aria-hidden','true');
    }
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
        // close mobile nav after click
        if(window.innerWidth<=880){
          navToggle.setAttribute('aria-expanded','false');
          mainNav.setAttribute('aria-hidden','true');
        }
      }
    });
  });

  // Basit form doğrulama (ön uç)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){
      alert('Lütfen tüm alanları doldurun.');
      return;
    }
    if(!/^\S+@\S+\.\S+$/.test(email)){
      alert('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }
    // Simule gönderim
    alert('Mesajınız gönderildi — teşekkürler!');
    form.reset();
  });
});