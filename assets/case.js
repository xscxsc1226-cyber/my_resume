(() => {
  const dialog = document.querySelector('.lightbox');
  const shots = [...document.querySelectorAll('.shot')];
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('.lightbox-image');
  const caption = dialog.querySelector('.lightbox-caption');
  const counter = dialog.querySelector('#lightbox-counter');
  let activeIndex = 0;
  let opener;
  const render = () => {
    const shot = shots[activeIndex];
    image.src = shot.href;
    image.alt = shot.querySelector('img').alt;
    caption.textContent = shot.closest('figure').querySelector('figcaption').textContent;
    counter.textContent = `${activeIndex + 1} / ${shots.length}`;
  };
  const move = step => { activeIndex = (activeIndex + step + shots.length) % shots.length; render(); };
  shots.forEach((shot, index) => {
    shot.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      activeIndex = index;
      opener = shot;
      render();
      dialog.showModal();
      document.body.classList.add('has-dialog');
      dialog.querySelector('.lightbox-close').focus();
    });
  });
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click', () => move(Number(button.dataset.step))));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); }
  });
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => { document.body.classList.remove('has-dialog'); opener?.focus(); });
})();
