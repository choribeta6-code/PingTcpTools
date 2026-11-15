(function(){
  var h=document.documentElement,s=null;
  try{s=localStorage.getItem('ptt-lang')}catch(e){}
  var l=s||((navigator.language||'en').toLowerCase().indexOf('es')===0?'es':'en');
  h.setAttribute('data-lang',l);h.setAttribute('lang',l);
  document.addEventListener('DOMContentLoaded',function(){
    var b=document.getElementById('langBtn');
    function paint(){if(b)b.textContent=h.getAttribute('data-lang')==='es'?'EN':'ES'}
    if(b)b.addEventListener('click',function(){
      var n=h.getAttribute('data-lang')==='es'?'en':'es';
      h.setAttribute('data-lang',n);h.setAttribute('lang',n);
      try{localStorage.setItem('ptt-lang',n)}catch(e){}paint();
    });
    paint();
    var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
  });
})();
