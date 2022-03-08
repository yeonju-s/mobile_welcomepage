const imgs = [
    'imgs/phone-wallpaper1.jpg',
    'imgs/phone-wallpaper2.jpg',
    'imgs/phone-wallpaper3.jpg',
    'imgs/phone-wallpaper4.jpg',
    'imgs/phone-wallpaper5.jpg',
    'imgs/phone-wallpaper6.jpg',
    'imgs/phone-wallpaper7.jpg',
    'imgs/phone-wallpaper8.jpg',
    'imgs/phone-wallpaper9.jpg',
    'imgs/phone-wallpaper10.jpg',
    'imgs/phone-wallpaper11.jpg',
    'imgs/phone-wallpaper12.jpg',
    'imgs/phone-wallpaper13.jpg',
    'imgs/phone-wallpaper14.jpg',
    'imgs/phone-wallpaper15.jpg',
    'imgs/phone-wallpaper16.jpg',
    'imgs/phone-wallpaper17.jpg',
    'imgs/phone-wallpaper18.jpg',
]

const body = document.body;
const img = document.createElement('img');

body.appendChild(img);

img.src = imgs[Math.floor(Math.random()*imgs.length)];
img.classList.add('hello');