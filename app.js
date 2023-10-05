const navLinks = document.querySelector('.navLinks')
const menuToggle = document.querySelector('.menuToggle')

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})