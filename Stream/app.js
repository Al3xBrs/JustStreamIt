async function dialog(){
    let moreButtons = document.querySelectorAll('.more-button');
    let movieDialogs = document.querySelectorAll('.movieDialog');
    let closeButtons = document.querySelectorAll('.closeButton');

    console.log(moreButtons.length)
    console.log(moreButtons)

    for (let i = 0; i < moreButtons.length; i++) {
        moreButtons[i].addEventListener('click', function onOpen() {
            let index = Array.prototype.indexOf.call(moreButtons, this);
            if (index >= 0 && typeof movieDialogs[index].showModal === 'function') {
                movieDialogs[index].showModal();
            } else {
                console.error("L'API n'est pas pris en charge par le navigateur ou l'index est invalide.");
            }
        });
    }

    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', function onClose() {
            let index = Array.prototype.indexOf.call(closeButtons, this);
            if (index >= 0 && movieDialogs[index]) {
                movieDialogs[index].close();
            } else {
                console.error("L'index est invalide ou l'élément n'existe pas.");
            }
        });
    }
    
}

document.addEventListener("DOMContentLoaded", dialog)