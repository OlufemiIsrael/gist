const navItem = document.querySelector('.nav__items');
const openNavBtn = document.querySelector('#open__navBtn');
const closeNavBtn = document.querySelector('#close__navBtn');

const openNav = ()=>{
    navItem.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

const closeNav = ()=>{
    navItem.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);