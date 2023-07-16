import {openWebsiteFrame} from '../js/website/website.js'
import { openHome } from './home/home.js'


window.addEventListener("load", () => {
    openWebsiteFrame();
    openHome();
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