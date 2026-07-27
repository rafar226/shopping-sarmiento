const stores=[
  {name:'Rapsodia',category:'moda',domain:'rapsodia.com.ar'},{name:'Levi’s',category:'moda',domain:'levis.com.ar'},{name:'Montagne',category:'moda',domain:'montagne.com.ar'},{name:'Mimo & Co.',category:'moda',domain:'mimo.com.ar'},
  {name:'Café Martínez',category:'gastronomia',domain:'cafemartinez.com'},{name:'Mostaza',category:'gastronomia',domain:'mostazaweb.com.ar'},{name:'Cinemacenter',category:'entretenimiento',domain:'cinemacenter.com.ar'},{name:'Rapipago',category:'servicios',domain:'rapipago.com.ar'},
  {name:'Sport 78',category:'moda',domain:'sport78.com.ar'},{name:'Grido',category:'gastronomia',domain:'gridohelado.com'},{name:'Personal',category:'servicios',domain:'personal.com.ar'},{name:'Playland',category:'entretenimiento',domain:'playland.com.ar'}
];
const movies=[
  {title:'Duna: Parte Dos',genre:'Ciencia ficción · 2h 46m',time:'20:30',img:'https://image.tmdb.org/t/p/w780/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg'},
  {title:'Intensa-Mente 2',genre:'Animación · 1h 36m',time:'19:15',img:'https://image.tmdb.org/t/p/w780/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg'},
  {title:'Deadpool & Wolverine',genre:'Acción · 2h 08m',time:'22:00',img:'https://image.tmdb.org/t/p/w780/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg'}
];
const storeGrid=document.querySelector('#storeGrid');
function renderStores(filter='all'){
  storeGrid.innerHTML=stores.filter(s=>filter==='all'||s.category===filter).map((s,i)=>`<a class="store-card" href="#"><span>${s.category}</span><div class="store-card__logo"><img src="https://www.google.com/s2/favicons?domain=${s.domain}&sz=256" alt="Logo de ${s.name}" onerror="this.parentElement.hidden=true"></div><strong>${s.name}</strong><i>0${i+1} ↗</i></a>`).join('');
}
renderStores();
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderStores(btn.dataset.filter);
}));
document.querySelector('#movieStrip').innerHTML=movies.map(m=>`<article class="movie"><img src="${m.img}" alt="${m.title}"><div class="movie__info"><span>Hoy · ${m.time}</span><h3>${m.title}</h3><p>${m.genre}</p></div></article>`).join('');
const header=document.querySelector('#header');addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30));
const menuBtn=document.querySelector('#menuBtn'),nav=document.querySelector('#nav');menuBtn.addEventListener('click',()=>{nav.classList.toggle('open');document.body.classList.toggle('menu-open')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');document.body.classList.remove('menu-open')}));
const searchPanel=document.querySelector('#searchPanel');document.querySelectorAll('[data-search]').forEach(b=>b.addEventListener('click',()=>{searchPanel.classList.toggle('open');if(searchPanel.classList.contains('open'))setTimeout(()=>document.querySelector('#globalSearch').focus(),450)}));
document.querySelector('#globalSearch').addEventListener('input',e=>{const q=e.target.value.toLowerCase();document.querySelector('#searchResults').innerHTML=q?stores.filter(s=>s.name.toLowerCase().includes(q)||s.category.includes(q)).map(s=>`<span>${s.name} · ${s.category}</span>`).join(''):''});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
