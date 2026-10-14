(() => {
  document.documentElement.classList.add('js');
  const menu = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#nav-links');
  const closeMenu = () => {
    if (!menu || !navigation) return;
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', '展开导航菜单');
    navigation.classList.remove('is-open');
  };
  if (menu && navigation) {
    menu.addEventListener('click', () => {
      const expanded = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(expanded));
      menu.setAttribute('aria-label', expanded ? '收起导航菜单' : '展开导航菜单');
      navigation.classList.toggle('is-open', expanded);
    });
    navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); }
    });
    document.addEventListener('click', event => { if (!event.target.closest('.nav')) closeMenu(); });
    window.matchMedia('(min-width: 821px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
    if ('IntersectionObserver' in window) {
      const links = [...navigation.querySelectorAll('a[href^="#"]')];
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          links.forEach(link => {
            if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
          });
        });
      }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
      links.forEach(link => { const section = document.querySelector(link.hash); if (section) observer.observe(section); });
    }
  }
  document.querySelectorAll('[data-copy-email]').forEach(button => {
    button.addEventListener('click', async () => {
      const status = document.querySelector('.copy-status');
      try {
        await navigator.clipboard.writeText(button.dataset.copyEmail);
        if (status) status.textContent = '邮箱已复制。';
      } catch {
        if (status) status.textContent = '可选中上方邮箱复制，或点击邮箱直接联系。';
      }
    });
  });
})();
