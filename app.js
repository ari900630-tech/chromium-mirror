const url=document.querySelector('.url');
const buttons=document.querySelectorAll('.btn');
buttons.forEach(b=>b.addEventListener('click',()=>{b.style.transform='scale(.9)';setTimeout(()=>b.style.transform='',120)}));
if(url){url.addEventListener('click',()=>url.textContent='https://www.google.com');}
