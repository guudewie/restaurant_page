export function openHome() {
    
    const mainAnker = document.querySelector(".main")

    // create home page container
    const homePage = document.createElement("div")
    homePage.setAttribute("id", "home-page")

    mainAnker.appendChild(homePage)

    // create heading
    const heading = document.createElement("div")
    heading.classList.add("heading")
    heading.innerHTML = "Delizioso Gusto -<br>Authentic Italian Cuisine<br><br>"

    homePage.appendChild(heading)

    // create text
    const text = document.createElement("div")
    text.classList.add("text")
    text.innerHTML = "Welcome to Delizioso Gusto, where our passion for food meets Italian tradition. Indulge in our carefully crafted dishes, prepared with the finest ingredients sourced from Italy. Immerse yourself in the warm and inviting atmosphere as you savor the true taste of Italy. Buon appetito!"

    homePage.appendChild(text)
}