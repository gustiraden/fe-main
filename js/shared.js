/* ============= Show Nav Menu ============= */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Validate If for clicked nav toggle */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        console.log('toggle')
        navMenu.classList.add('show-menu');
    })
}

/* Validate If for clicked nav close */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/* ============= Remove Menu Mobile Screen ============= */
const navLink = document.querySelectorAll('.nav_link')

/* This function will remove the show menu class dari nav menu class */
function navLinkAction() {
    navMenu.classList.remove('show-menu');
}

/* Every time we click navLink, it will run the navLinkAction */
navLink.forEach(n => n.addEventListener('click', navLinkAction));

/* ============= Change Background Color of Header ============= */
function scrollHeader() {
    const header = document.getElementById('header');

    if(this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


/* ============= Scroll Up ============= */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);


/* ============= Left Arrow Function ============= */

function goBack() {
    window.history.back();
}


// Inisialisasi status login (contoh: false berarti belum login)
let isLoggedIn = false;

// Fungsi untuk menangani logika login
function login(username, password) {
  // Contoh logika sederhana, Anda mungkin perlu mengganti ini dengan autentikasi yang lebih aman
  if (username === 'user' && password === 'password') {
    isLoggedIn = true;
    return true; // Berhasil login
  } else {
    return false; // Gagal login
  }
}

// Fungsi untuk menangani logika logout
function logout() {
  isLoggedIn = false;
}

// Fungsi untuk memperbarui tampilan navbar berdasarkan status login
function updateNavbar() {
  const signInButton = document.querySelector('.nav_item a.button-link');
  const profileItem = document.querySelector('.nav_item.profile');

  if (isLoggedIn) {
    // Jika sudah login, sembunyikan tombol Sign In dan tampilkan profil
    signInButton.style.display = 'none';
    profileItem.style.display = 'block';
  } else {
    // Jika belum login, tampilkan tombol Sign In dan sembunyikan profil
    signInButton.style.visibility = 'visible';
    profileItem.style.display = 'none';
  }
}

// Panggil fungsi untuk mengatur tampilan navbar saat halaman dimuat
updateNavbar();

// // Fungsi untuk menangani klik pada tombol Sign In
// function handleSignInClick() {
//     // Gantilah dengan logika login yang sesuai dengan kebutuhan Anda
//     const emailInput = document.getElementById('email').value;
//     const passwordInput = document.getElementById('password').value;

//     // Contoh logika sederhana, Anda mungkin perlu mengganti ini dengan autentikasi yang lebih aman
//     if (emailInput === 'user@example.com' && passwordInput === 'password123') {
//         // Jika login berhasil, redirect ke home page
//         window.location.href = 'index.html';

//         // Setelah pengalihan halaman, update status login dan navbar
//         isLoggedIn = true;
//         updateNavbar();
//     } else {
//         console.log('Login gagal');
//     }
// }



