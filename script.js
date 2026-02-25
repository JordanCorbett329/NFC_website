(function(){
  const btn = document.querySelector('[data-menu-btn]');
  const drawer = document.querySelector('[data-mobile-drawer]');
  if(!btn || !drawer) return;
  btn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
})();
