const menu = document.querySelector('.hamburger');
menu.addEventListener('click', function() {
    const menuMobile = document.querySelector('.menu-overlay');
    menuMobile.style.top = '0';
})

const menuMobile = document.querySelector('.menu-overlay');
menuMobile.addEventListener('click', function() {
    menuMobile.style.top = '-100vh';
})

const randomChange = document.getElementById('randomchange'),
images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg']
const imgCount = images.length
const number = Math.floor(Math.random() * imgCount);
window.onload = function(){
    randomChange.style.backgroundImage = 'url('+images[number]+')'
}