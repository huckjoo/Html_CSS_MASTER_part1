const bar = document.querySelector('.nav__hamburger');
const menu = document.querySelector('.nav__menus');
bar.addEventListener('click',function(){
    menu.classList.toggle('active');
});