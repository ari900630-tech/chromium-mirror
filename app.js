let tabs=JSON.parse(localStorage.getItem('tabs')||'["חדש"]');
let historyList=JSON.parse(localStorage.getItem('history')||'[]');
let bookmarks=JSON.parse(localStorage.getItem('bookmarks')||'[]');
function openMenu(){const m=document.getElementById('menu');m.style.display=m.style.display==='block'?'none':'block'}
const address=document.getElementById('address');
if(address){address.addEventListener('keydown',e=>{if(e.key==='Enter'){let v=address.value;if(!v.startsWith('http'))v='https://www.google.com/search?q='+encodeURIComponent(v);historyList.push(v);localStorage.setItem('history',JSON.stringify(historyList));window.location.href=v;}})}
function addBookmark(){if(address&&address.value){bookmarks.push(address.value);localStorage.setItem('bookmarks',JSON.stringify(bookmarks));}}
function newTab(){tabs.push('חדש');localStorage.setItem('tabs',JSON.stringify(tabs));location.reload()}
function showHistory(){alert(historyList.join('\n')||'אין היסטוריה')}
function showBookmarks(){alert(bookmarks.join('\n')||'אין סימניות')}
const buttons=document.querySelectorAll('.btn');
buttons.forEach(b=>b.addEventListener('click',()=>{b.style.transform='scale(.9)';setTimeout(()=>b.style.transform='',120)}));