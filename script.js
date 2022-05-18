let notif = document.querySelector('.bell');
let popUp = document.querySelector('.bellWindow');

notif.addEventListener('mouseover', () => {
    popUp.classList.add('popUp');
    popUp.textContent = "✓ No new notifications.";
});

notif.addEventListener('mouseout', () => {
    popUp.textContent = "";
    popUp.classList.remove('popUp');
});



