var items = document.querySelectorAll('.pag-wid-same');

items.forEach(function(item) {
    var header = item.querySelector('.pag-wid-head');
    var content = item.querySelector('.pag-wid-dropdown');

    header.addEventListener('click', function() {

        let icon = header.getElementsByTagName('span');
        icon[0].innerText = icon[0].innerText === 'add' ? icon[0].innerText = 'remove' : icon[0].innerText = 'add' ;
        content.style.display = content.style.display === 'block' ? content.style.display = 'none' : content.style.display = 'block' ;
    })
});
 