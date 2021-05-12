const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menu li')

const toggle_menu = () => {
  menu.classList.toggle('hide')
}

burger.addEventListener('click', () => {
  toggle_menu()
})

menuItems.forEach((menuItem) => {
  menuItem.onclick = () => toggle_menu()
})
