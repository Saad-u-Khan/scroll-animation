const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 4.5 * 4;
    boxes.forEach(box => {
        
        /*returns a DOMRect object providing information
        about the size of an element and its position relative to the viewport*/
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}
