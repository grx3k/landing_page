window.onload = function () {

    const mobile_menu = document.querySelector('.mobile-nav');
    const menu_btn = document.querySelector('.hamburger');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });

}