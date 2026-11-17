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

/* Contador REAL de descargas (GitHub Releases). Se muestra solo si >= MIN. */
(function(){
  var MIN=100;
  document.addEventListener('DOMContentLoaded',function(){
    var box=document.getElementById('dlCount'),num=document.getElementById('dlNum');
    if(!box||!num||!window.fetch)return;
    fetch('https://api.github.com/repos/choribeta6-code/PingTcpTools/releases?per_page=100')
      .then(function(r){return r.ok?r.json():[]})
      .then(function(rel){
        var t=0;
        rel.forEach(function(r){(r.assets||[]).forEach(function(a){
          if(/Setup\.exe$/i.test(a.name))t+=a.download_count||0;
        })});
        if(t>=MIN){num.textContent=t.toLocaleString(document.documentElement.lang==='es'?'es-PE':'en-US');box.hidden=false;}
      }).catch(function(){});
  });
})();
