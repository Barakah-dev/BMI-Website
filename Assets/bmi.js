

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
  console.log('close');

  if (clickedElement.classList.contains('menu-close') || !clickedElement.classList.contains('menu-open')) {
    nav.classList.remove('toggle'); 
  }
});

// Day & Night Mode
const mode = document.querySelector('.mode');
const night = document.querySelector('.night');
const day = document.querySelector('.day');
const bmiContainer = document.querySelector('.bmi-container');
const btn = document.querySelector('.btn');


mode.addEventListener('click', (e) => {
  let clickedEl = e.target;
  if ((clickedEl.classList.contains('night')) || (clickedEl.classList.contains('day'))) {
    body.classList.toggle('dark-body');
    nav.classList.toggle('dark-nav');
    menu.classList.toggle('dark-menu');
    bmiContainer.classList.toggle('bmi-container-dark');
    btn.classList.toggle('btn-dark');
    night.classList.toggle('hidden')
    day.classList.toggle('hidden')
  }
})

const btnEl = document.getElementById('btn');
const bmiInputEl = document.getElementById('bmi-result');
const weightConditionEl = document.getElementById('weight-condition');


function calculateBMI() {
  const heightValue = document.getElementById('height').value / 100;
  const weightValue = document.getElementById('weight').value;

  const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(1);
  bmiInputEl.value = bmiValue;

  if (bmiValue < 18.5) {
    weightConditionEl.innerText = 'Your BMI suggests that you are underweight.'
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = 'Your BMI suggests that you have a normal weight.'
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = 'Your BMI suggests that you are overweight.'
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = 'Your BMI suggests that you are obese.'
  }
};


btnEl.addEventListener('click', calculateBMI);