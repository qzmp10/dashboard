let notif = document.querySelector('.bell');
let popUp = document.querySelector('.bellWindow');
let sidebarElements = document.querySelectorAll('.sideInfo');
let errorWindow = document.querySelector('.errorWindow');
let headerBtns = document.querySelectorAll('.btn');

let slideShow = document.querySelector('.slideshow');
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');

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

leftArrow.addEventListener('click', () => {
    slideShow.href = "https://www.theodinproject.com/lessons/foundations-fundamentals-part-3";
})






