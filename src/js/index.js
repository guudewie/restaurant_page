import { openWebsiteFrame } from '../js/website/website.js';
//import { openHome } from './home/home.js';
import { openMenu } from './menu/menu.js';
//import { openAboutUs } from './aboutus/aboutus.js';


window.addEventListener("load", () => {
    openWebsiteFrame();
    openMenu();
})

// import openMenu() from menu
// import openContact() from contact

/*


TAP-SWITCHING LOGIC

main.addeventlistener {
    openMain()   
}

menu.addeventlistener { 
    openMenu()   
}

contact.addeventlistener {
    openContact()   
}


*/