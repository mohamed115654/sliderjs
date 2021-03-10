// // slide index Used in 
// var slideIndex = 1;

// // function Slide Show
// function slideShow(control) {

//     var slideShow = document.getElementsByClassName('slide-show'),
//         dots = document.getElementsByClassName('dots'),
//         i;

//         // loop hidden all image from slide
//         for(i = 0; i < slideShow.length; i++) {
//             slideShow[i].style.display = 'none'
//         }

//         // length all slide image
//         if(control > slideShow.length) {
//             slideIndex = 1
//         }
//         if(control < 1) {
//             slideIndex = slideShow.length
//         }

//         // show first slide image from none to block
//         slideShow[slideIndex - 1].style.display = 'block'
// }
// slideShow()

// // function plus Next & previous botton
// function plus(control) {
//     slideShow(slideIndex += control)
// }

// // function dots
// function dots(n) {
//     slideShow(slideIndex = n)
// }

let slideIndex = 1;

test = (number) => {
    let slideShow = document.querySelectorAll('.slide-show');

    // forEach hidden all image from slide
    slideShow.forEach(function(slides) {
        slides.style.display = 'none'
    })

    if(number > slideShow.length) {
        slideIndex = 1;
    }
    if(number < 1) {
        slideIndex = slideShow.length
    }
    
    // show first slide image from none to block
    slideShow[slideIndex - 1].style.display = 'block'
}
test();

plus = (number)=> {test(slideIndex += number)};

dots = (polit)=> {test(slideIndex = polit)};

