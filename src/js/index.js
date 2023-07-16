import { openWebsiteFrame } from '../js/website/website.js';
import { openHome } from './home/home.js';
import { openMenu } from './menu/menu.js';
import { openAboutUs } from './aboutus/aboutus.js';

import '../css/style.css'


function removeMain() {
    
    let mainElements = document.querySelectorAll(".main>*");
    mainElements.forEach((element) => element.remove())
}

openWebsiteFrame();
openHome();

// initiate query selectors after openWebsiteFrame is run to avoid 'null error'
const tapHome = document.querySelector("#tap-home");
const tapMenu = document.querySelector("#tap-menu");
const tapAboutUs = document.querySelector("#tap-aboutus");

tapHome.addEventListener("click", () => {
    removeMain();
    openHome();
    tapHome.classList.toggle("active")
    tapMenu.classList.remove("active")
    tapAboutUs.classList.remove("active")
})

tapMenu.addEventListener("click", () => {
    removeMain();
    openMenu();
    tapHome.classList.remove("active")
    tapMenu.classList.toggle("active")
    tapAboutUs.classList.remove("active")
})

tapAboutUs.addEventListener("click", () => {
    removeMain();
    openAboutUs();
    tapHome.classList.remove("active")
    tapMenu.classList.remove("active")
    tapAboutUs.classList.toggle("active")
})