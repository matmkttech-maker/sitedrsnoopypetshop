document.querySelectorAll('[data-wa]').forEach(link=>{link.href='https://wa.me/5571985539111?text='+encodeURIComponent(link.dataset.wa);link.target='_blank';link.rel='noopener noreferrer'});
const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#menu');
function closeMenu(){menu.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false')}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menu.classList.toggle('is-open',open)});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.classList.contains('is-open')){closeMenu();menuButton.focus()}});
