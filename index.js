const showMenu = () => {
    document.getElementById('menu').classList.add('active');
}

const hideMenu = () => {
    document.getElementById('menu').classList.remove('active');
}

const menuToggle = document.getElementById('menuToggle');
menuToggle.addEventListener('click', showMenu);

document.onclick = (e) => {
    if (e.target.id !== 'menuToggle') {
        hideMenu();
    }
}