window.onload = function() {
    const navigation = document.getElementsByClassName('navigation');
    const navCheckbox = document.getElementById('navigation-toggle');
    const navItems = document.querySelectorAll('.navigation__item');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => { 
            // let linkItem = item.querySelectorAll('.navigation__link').length.getAttribute('a');
            navCheckbox.checked = false;
            // console.log(linkItem);
            window.scrollTo(0, document.getElementById('features-section').offsetHeight);
            console.log(document.getElementById('features-section'));
        });
    });
}