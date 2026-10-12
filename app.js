function openMenu(){const m=document.getElementById('menu');m.style.display=m.style.display==='block'?'none':'block'}
const address=document.getElementById('address');
if(address){address.addEventListener('keydown',e=>{if(e.key==='Enter'){let v=address.value;if(!v.startsWith('http'))v='https://www.google.com/search?q='+encodeURIComponent(v);window.location.href=v;}})}
const buttons=document.querySelectorAll('.btn');
buttons.forEach(b=>b.addEventListener('click',()=>{b.style.transform='scale(.9)';setTimeout(()=>b.style.transform='',120)}));