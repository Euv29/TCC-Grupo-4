const $html = document.querySelector('html')
const $button = document.querySelector('#chk')
// const $pm_eye = document.querySelector('.pm_eye')


$button.addEventListener('change', function() {
     $html.classList.toggle('dark-mode')
});

// Animação do personagem(movimeto dos olhos)
document.addEventListener("mousemove", function(e) {
     var eye = document.querySelector(".pm_eyes");
     eye.style.right = e.pageX + 'px'; 
     eye.style.top = e.pageY + 'px'; 
});