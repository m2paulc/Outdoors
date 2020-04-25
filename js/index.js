window.onload = function() {
    const navigation = document.getElementsByClassName('navigation');
    const navCheckbox = document.getElementById('navigation-toggle');
    const navItems = document.querySelectorAll('.navigation__item');

    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    
    navItems.forEach(item => {
        item.addEventListener('click', () => { 
            let linkItem = item.getElementsByTagName('a')[0].getAttribute('href');
            navCheckbox.checked = false;
        });
    });
}