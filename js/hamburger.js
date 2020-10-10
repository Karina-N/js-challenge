function burger () {


document.querySelector('#hamburger').addEventListener('click', () => {

  const nav = document.querySelector('.nav-top');
  if (nav.classList.contains('visible')) {
    nav.classList.remove('visible');
  } else {
    nav.classList.add('visible');
  }
});

}

export default burger;