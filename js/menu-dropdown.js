
  const dropdown = document.querySelector('.dropdown');
  const trigger = dropdown.querySelector('a');

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('active');
  });

  window.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
