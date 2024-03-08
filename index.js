//HOME PAGE

//Mobile nav
const body = document.querySelector('body');
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

menuOpen.addEventListener('click', () => {
  nav.classList.add('toggle');
  console.log('open');
})

body.addEventListener('click', (e) => {
  let clickedElement = e.target;

  if (clickedElement.classList.contains('menu-close') || !clickedElement.classList.contains('menu-open')) {
    nav.classList.remove('toggle'); 
  }
});

// Day & Night Mode
const logo = document.querySelector('.logo');
const mode = document.querySelector('.mode');
const night = document.querySelector('.night');
const day = document.querySelector('.day');
const container = document.querySelector('.container');
const healthTips = document.querySelector('.health-tips');
const cards = document.querySelectorAll('.card');
const odd = document.querySelectorAll('.odd');
const even = document.querySelectorAll('.even')
const footer = document.querySelector('footer')
const icons = document.querySelectorAll('.icon')


mode.addEventListener('click', (e) => {
  let clickedEl = e.target;
  if ((clickedEl.classList.contains('night')) || (clickedEl.classList.contains('day'))) {
    body.classList.toggle('dark-body');
    nav.classList.toggle('dark-nav');
    logo.classList.toggle('dark-logo');
    // menu.classList.toggle('dark-menu');
    container.classList.toggle('dark-container');
    healthTips.classList.toggle('dark-health-tips');
    cards.forEach(card => {
      card.classList.toggle('dark-card');
    });
    
    odd.forEach(oddItem => {
      oddItem.classList.toggle('odd-dark');
    });
    
    even.forEach(evenItem => {
      evenItem.classList.toggle('even-dark');
    });
    icons.forEach(icon => {
      icon.classList.toggle('dark-icon');
    });
    footer.classList.toggle('dark-footer')
    night.classList.toggle('hidden')
    day.classList.toggle('hidden')
  }
})

// FAQ
const accordion = document.querySelectorAll('.accordion');
const question = document.querySelectorAll('.question');
const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const response = document.querySelectorAll('.response');


for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', (e) =>  {
    let clickedEl = e.target;
    if ((clickedEl.classList.contains('plus')) || (clickedEl.classList.contains('minus'))) {
      plus[i].classList.toggle('hidden');
      minus[i].classList.toggle('hidden');
      response[i].classList.toggle('hidden');
    }
  })  
};

// ValidateEmail
const emailMessage = document.querySelector('small');
function validateEmail() {
  let email = document.querySelector(".email").value;
  if (email.length === 0) {
    emailMessage.innerHTML = 'Email is required';
    return false;
  } 
  else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    emailMessage.innerHTML = 'Invalid email';
    return false;
  } 
  else{
    emailMessage.innerHTML = '<i class="fa-solid fa-check-circle"></i>' + ' success';
    emailMessage.style.color = 'green';
    return true;
  }
}
