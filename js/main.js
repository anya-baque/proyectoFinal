const menuCI = document.querySelectorAll('.menu');

menuCI.forEach(function(item) {
    item.addEventListener('click', function(e) {
     const currentItem = document.querySelector('.activo');
    currentItem.classList.remove('activo');
    e.target.classList.add ('activo');
});
});
