const bar = document.querySelector('.nav__hamburger');
const menu = document.querySelector('.nav__menus');
const firstSlide = document.querySelector('.main__slider__box:first-child');
bar.addEventListener('click',function(){
    menu.classList.toggle('active');
});
firstSlide.classList.add("showing");
// let changeSlide = function(){
//     if(firstSlide.hasClass('showing')){
//         firstSlide.classList.delete("showing");
//         firstSlide.nextSibling.classList.add('showing');
//     }
// }
// changeSlide();