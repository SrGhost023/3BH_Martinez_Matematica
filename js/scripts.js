document.addEventListener('DOMContentLoaded', function() {
    const funImage = document.getElementById('funImage');
    
    funImage.addEventListener('click', function() {
        funImage.classList.add('jump');
        setTimeout(() => funImage.classList.remove('jump'), 500);
    });
});
