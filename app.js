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
let backslide = function(){
    const thisSlide = document.querySelector('.showing');
    if(thisSlide){
        thisSlide.classList.remove('showing');
        const backSlide = thisSlide.previousElementSibling;
        if(backSlide){
            backSlide.classList.add('showing');
        }else{
            lastSlide.classList.add('showing');
        }
    }else{
        lastSlide.classList.add('showing');
    }
}
const btn__L = document.querySelector('.main__slider__btn__L');
const btn__R = document.querySelector('.main__slider__btn__R')
btn__R.addEventListener('click',startSlide);
btn__L.addEventListener('click',backslide);













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