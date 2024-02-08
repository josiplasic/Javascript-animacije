const textTag = document.querySelector('.section1 h1');
const text = textTag.innerText;
const splittedText = text.split('');

textTag.innerText = '';

for (let i = 0; i < splittedText.length; i++) {

  if (splittedText[i] === " ") {
    splittedText[i] = "&nbsp";
  }

  textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}

const spans = textTag.querySelectorAll('span');
let k = 0;
const interval = setInterval(() => {
  let singleSpan = spans[k];
  singleSpan.className = 'fadeMove';
  k++;

  if (k === spans.length) {
    clearInterval(interval);
  }
}, 200);

const border = document.querySelector('.border-line');
let animationWidth = 0;

window.onscroll = () => {
  // Za scroll(linija);
  
  if (this.oldScroll > this.scrollY) {
    animationWidth -= 1.5;
  } else {
    animationWidth += 1;
  }

  if (animationWidth >= 100) {
    animationWidth = 100;
  }

  if (animationWidth <= 0) {
    animationWidth = 0;
  }

  animationWidth += 1;
  border.style.width = animationWidth + '%';

  this.oldScroll = this.scrollY;

  imageAnimation();
}

const imageAnimation = () => {
    // Za slike;

    const sectionForAnimation = document.querySelector('.section2 .images');
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    const leftImage = document.querySelector('.slideFromLeft');
    const rightImage = document.querySelector('.slideFromRight');
  
    if (sectionPosition < screenPosition) {
      leftImage.classList.add('animated');
      rightImage.classList.add('animated');
    }
}

