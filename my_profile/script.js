const body = document.getElementById('hobbies')
const slides = document.querySelectorAll('.hobby')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const bars = document.getElementById('bars')
const list = document.querySelector('.list ul')
const closeBtn = document.getElementById('closeBtn')

let activeSlide = 0

const setBgToBody = () => {
  body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    ${slides[activeSlide].style.backgroundImage}`
}

const removeActive = () => {
  slides.forEach((slide) => slide.classList.remove('active'))
}

const addActive = () => {
  slides[activeSlide].classList.add('active')
}

leftBtn.onclick = () => {
  activeSlide--
  if (activeSlide < 0) activeSlide = slides.length - 1
  removeActive()
  addActive()
  setBgToBody()
}

rightBtn.onclick = () => {
  activeSlide++
  if (activeSlide > slides.length - 1) activeSlide = 0
  removeActive()
  addActive()
  setBgToBody()
}

setBgToBody()
