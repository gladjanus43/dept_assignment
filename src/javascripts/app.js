import './modules'
import { timeout } from 'rxjs/operators';

// console.log(`app.js has loaded!`)

let openMenu_button = document.getElementById('openMenu');
openMenu_button.addEventListener('click', openMenu);

let closeMenu_button = document.getElementById('closeMenu');
closeMenu_button.addEventListener('click', closeMenu)

let menu = document.getElementById('menu')

let top_button = document.getElementById('goToTop')
top_button.addEventListener('click', goToTop)

function openMenu(){
    menu.style.left = '0'
    document.body.style.overflow = 'hidden'
}

function closeMenu(){
    menu.style.left = '-100vw';
    document.body.style.overflow = 'scroll'
}

function goToTop(){
    let interval
    if(document.documentElement.scrollTop!=0){
        window.scrollBy(0,-50);
        interval = setTimeout(goToTop, 2);
    }else{
        clearTimeout(interval)
    }
}