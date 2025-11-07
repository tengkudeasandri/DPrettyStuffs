let navbar = document.querySelector('.header .flex .navbar');
let account = document.querySelector('.user-account');
let closeAccount = document.querySelector('#close-account span');

// tombol menu (menu-btn)
document.querySelector('#menu-btn')?.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// tombol user (buat buka halaman login/register)
document.querySelector('#user-btn')?.addEventListener('click', () => {
    account.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// tombol close (buat nutup halaman login/register)
closeAccount?.addEventListener('click', () => {
    account.classList.remove('active');
    document.body.style.overflow = 'auto'; 
});

// biar navbar-nya hilang pas scroll
window.addEventListener('scroll', () => {
    navbar.classList.remove('active');
});
