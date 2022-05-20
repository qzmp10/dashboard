//variables for the popups when hovering/ clicking sidebar elements and/or buttons
let notif = document.querySelector('.bell');
let popUp = document.querySelector('.bellWindow');
let sidebarElements = document.querySelectorAll('.sideInfo');
let errorWindow = document.querySelector('.errorWindow');
let headerBtns = document.querySelectorAll('.btn');

let slideShow = document.querySelector('.slideshow');
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');

//default project for the slideshow
slideShow.href = "https://qzmp10.github.io/etch-a-sketch/";

//slide text content
let slideText = document.querySelector('.slide-text > p');

//Warning pops up when user tries to click something
notif.addEventListener('mouseover', () => {
    popUp.classList.add('popUp');
    popUp.textContent = "✓ No new notifications.";
});

notif.addEventListener('mouseout', () => {
    popUp.textContent = "";
    popUp.classList.remove('popUp');
});

sidebarElements.forEach(sidebarElement => {
    sidebarElement.addEventListener('click', () => {
        errorWindow.classList.add('mockUi');
        errorWindow.textContent = "❌ This is a mock UI! You cannot interact with it!";
    });
    sidebarElement.addEventListener('mouseout', () => {
        errorWindow.classList.remove('mockUi');
        errorWindow.textContent = "";
    });
});

headerBtns.forEach(button => {
    button.addEventListener('click', () => {
        errorWindow.classList.add('mockUi');
        errorWindow.textContent = "❌ This is a mock UI! You cannot interact with it!";
    });
    button.addEventListener('mouseout', () => {
        errorWindow.classList.remove('mockUi');
        errorWindow.textContent = "";
    });
});

//Clicking arrow changes link of element, and animates it
leftArrow.addEventListener('click', () => {

    if (slideShow.href == "https://qzmp10.github.io/etch-a-sketch/") {
        slideShow.classList.add('slide-transition');
        slideShow.addEventListener('transitionend', () => {

            // when 1st transition ends, go to calculator
            slideShow.classList.add('slide-transition-2');
            slideShow.href = "https://qzmp10.github.io/calculator/";
            slideShow.setAttribute('style', 'background-image: linear-gradient(slategray, white)');
            slideText.textContent = 'Calculator';
            slideShow.classList.remove('slide-transition');

            //when 2nd transition ends, remove class
            slideShow.addEventListener('transitionend', () => {
                slideShow.classList.remove('slide-transition-2');
            });
        });

    } else if (slideShow.href == "https://qzmp10.github.io/calculator/") {
        slideShow.classList.add('slide-transition');
        slideShow.addEventListener('transitionend', () => {

           // when 1st transition ends, go to sign-up form, remove 1st slide class
            slideShow.classList.add('slide-transition-2');
            slideShow.href = 'https://qzmp10.github.io/signup_form/';
            slideShow.setAttribute('style', 'background-image: linear-gradient(rgb(0, 0, 0), rgb(29, 245, 0))');
            slideText.textContent = 'Sign-up form';
            slideShow.classList.remove('slide-transition');
            
            //when 2nd transition ends, remove class
            slideShow.addEventListener('transitionend', () => {
                slideShow.classList.remove('slide-transition-2');
            });
        });

    } else if (slideShow.href == 'https://qzmp10.github.io/signup_form/') {
        slideShow.classList.add('slide-transition');
        slideShow.addEventListener('transitionend', () => {

           // when 1st transition ends, go to sign-up form, remove 1st slide class
            slideShow.classList.add('slide-transition-2');
            slideShow.href = "https://qzmp10.github.io/etch-a-sketch/";
            slideShow.setAttribute('style', 'background-image: linear-gradient(rgb(162, 0, 255), rgb(255, 174, 0))');
            slideText.textContent = 'Etch-a-sketch';
            slideShow.classList.remove('slide-transition');
            
            //when 2nd transition ends, remove class
            slideShow.addEventListener('transitionend', () => {
                slideShow.classList.remove('slide-transition-2');
            });
        });
    }
});

rightArrow.addEventListener('click', () => {

    if (slideShow.href == "https://qzmp10.github.io/etch-a-sketch/") {
        slideShow.classList.add('slide-transition');
        slideShow.addEventListener('transitionend', () => {

            // when 1st transition ends, go to calculator
            slideShow.classList.add('slide-transition-2');
            slideShow.href = 'https://qzmp10.github.io/signup_form/';
            slideShow.setAttribute('style', 'background-image: linear-gradient(rgb(0, 0, 0), rgb(29, 245, 0))');
            slideText.textContent = 'Sign-up form';
            slideShow.classList.remove('slide-transition');

            //when 2nd transition ends, remove class
            slideShow.addEventListener('transitionend', () => {
                slideShow.classList.remove('slide-transition-2');
            });
        });

    } else if (slideShow.href == 'https://qzmp10.github.io/signup_form/') {
        slideShow.classList.add('slide-transition');
        slideShow.addEventListener('transitionend', () => {

           // when 1st transition ends, go to sign-up form, remove 1st slide class
            slideShow.classList.add('slide-transition-2');
            slideShow.href = "https://qzmp10.github.io/calculator/";
            slideShow.setAttribute('style', 'background-image: linear-gradient(slategray, white)');
            slideText.textContent = 'Calculator';
            slideShow.classList.remove('slide-transition');
            
            //when 2nd transition ends, remove class
            slideShow.addEventListener('transitionend', () => {
                slideShow.classList.remove('slide-transition-2');
            });
        });

    } else if (slideShow.href == "https://qzmp10.github.io/calculator/") {
        slideShow.classList.add('slide-transition');
        slideShow.addEventListener('transitionend', () => {

           // when 1st transition ends, go to sign-up form, remove 1st slide class
            slideShow.classList.add('slide-transition-2');
            slideShow.href = "https://qzmp10.github.io/etch-a-sketch/";
            slideShow.setAttribute('style', 'background-image: linear-gradient(rgb(162, 0, 255), rgb(255, 174, 0))');
            slideText.textContent = 'Etch-a-sketch';
            slideShow.classList.remove('slide-transition');
            
            //when 2nd transition ends, remove class
            slideShow.addEventListener('transitionend', () => {
                slideShow.classList.remove('slide-transition-2');
            });
        });
    }
});






