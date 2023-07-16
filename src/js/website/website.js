import '../../css/style.css'

export function openWebsiteFrame() {
    
    const anker = document.getElementById("content");

    // create basic layout
    const header = document.createElement("div")
    const main = document.createElement("div")
    const footer = document.createElement("div")
    
    header.classList.add("header")
    main.classList.add("main")
    footer.classList.add("footer")

    anker.append(header, main, footer)

    // create header child elements
    const tapHome = document.createElement("div");
    const tapMenu = document.createElement("div")
    const tapABoutUs = document.createElement("div")

    tapHome.classList.add("tap", "active") //initiate menu tap with active class –> underlined
    tapHome.setAttribute("id", "tap-home")
    tapMenu.classList.add("tap")
    tapMenu.setAttribute("id", "tap-menu")
    tapABoutUs.classList.add("tap")
    tapABoutUs.setAttribute("id", "tap-aboutus")

    header.appendChild(tapHome)
    header.appendChild(tapMenu)
    header.appendChild(tapABoutUs)

    tapHome.innerHTML = "Home"
    tapMenu.innerHTML = "Menu"
    tapABoutUs.innerHTML = "About Us"

    // create footer child elements
    const footerTel = document.createElement("div")
    const footerMail = document.createElement("div")
    const footerAdress = document.createElement("div")

    footer.appendChild(footerTel)
    footer.appendChild(footerMail)
    footer.appendChild(footerAdress)

    footerTel.innerHTML = "Tel.: +49 (0) 175746001"
    footerMail.innerHTML = "Mail: very.italian@restaurant.ciao"
    footerAdress.innerHTML = "Piazza di Faccist 12, 68894 Milan"
}

