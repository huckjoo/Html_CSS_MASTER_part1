const bar = document.querySelector('.nav__hamburger');
const menu = document.querySelector('.nav__menus');
// const firstSlide = document.querySelector('.main__slider__box:first-child');
// const lastSlide = document.querySelector('.main__slider__box:last-child');
bar.addEventListener('click',function(){
    menu.classList.toggle('active');
});

const firstSlide = document.querySelector('.main__slider__box:first-child');
const lastSlide = document.querySelector('.main__slider__box:last-child');
let startSlide = function(){
    const thisSlide = document.querySelector('.showing');

    if(thisSlide){
        thisSlide.classList.remove('showing');
        const nextSlide = thisSlide.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add('showing');
        }else{
            firstSlide.classList.add('showing');
        }
    }else{
        firstSlide.classList.add('showing');
    }
}
setInterval(startSlide,2000);














// let changeSlide = function(){
//     const currentSlide = document.querySelector('.showing');
//     if(currentSlide){
//         currentSlide.classList.remove("showing");
//         const nextSlide = currentSlide.nextElementSibling;
//      if(nextSlide){
//         nextSlide.classList.add('showing');
//     } else{
//         firstSlide.classList.add("showing");
//         }
//     }else{
//         firstSlide.classList.add("showing");
//     }
// }
// setInterval(changeSlide,2000);