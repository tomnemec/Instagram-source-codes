let isOpen = false;
const profileMenu = document.getElementById('profileMenu');
const profileMenuButton = document.getElementById('profImg');

profileMenuButton.addEventListener('click', () => {
  if (isOpen) {
    profileMenu.classList.remove('open');
  } else {
    profileMenu.classList.add('open');
  }
  isOpen = !isOpen;
});
