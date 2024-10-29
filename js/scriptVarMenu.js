const temas = document.getElementById('temas');
const menuTemas = document.getElementById('menuTemas');

temas.addEventListener('click', function(event) {
    event.preventDefault();
    menuTemas.classList.toggle('active');
})

document.addEventListener('click', function(event) {
    if (!menuTemas.contains(event.target) && !temas.contains(event.target)) {
        menuTemas.classList.remove('active');
    }
});