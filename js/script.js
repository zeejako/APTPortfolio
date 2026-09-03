
function toggleMode(){
  document.body.classList.toggle('dark-mode');
  const btn = document.querySelector('.mode-btn');
  if(document.body.classList.contains('dark-mode')){
    btn.textContent = '☀️';
    localStorage.setItem('mode','dark');
  } else {
    btn.textContent = '🌙';
    localStorage.setItem('mode','light');
  }
}

window.addEventListener('load', ()=>{
  if(localStorage.getItem('mode')==='dark'){
    document.body.classList.add('dark-mode');
    const btn=document.querySelector('.mode-btn');
    if(btn) btn.textContent='☀️';
  }
 
  if(window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')){
    console.log("Welcome to Zizile Jako Portfolio!");
    
  }

  const clock = document.getElementById('clock');
  if(clock){
    setInterval(()=>{
      const now = new Date();
      clock.textContent = now.toLocaleTimeString();
    },1000);
  }
});


function toggleInfo(id){
  const info = document.getElementById(id);
  if(info.style.display === 'none' || info.style.display === ''){
    info.style.display = 'block';
  } else {
    info.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  const text = "Aspiring Data Analyst | Software Engineer";
  const el = document.querySelector('.hero-text h3');
  if(el){
    el.textContent = "";
    el.classList.add('typing');
    let i=0;
    function type(){
      if(i < text.length){
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 80);
      } else {
        el.classList.remove('typing');
      }
    }
    type();
  }
});

