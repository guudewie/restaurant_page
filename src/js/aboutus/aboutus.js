import '../../css/style.css'

export function openAboutUs() {

    const mainAnker = document.querySelector(".main")

    // create aboutus page container
    const aboutUsPage = document.createElement("div")
    aboutUsPage.setAttribute("id", "aboutus-page")

    mainAnker.appendChild(aboutUsPage)

    // create heading
    const heading = document.createElement("div")
    heading.classList.add("heading")
    heading.innerHTML = "ITALY since 1787"

    aboutUsPage.appendChild(heading)

    // create text
    const text = document.createElement("div")
    text.classList.add("text")
    text.innerHTML = "<br> Delizioso Gusto, though a new addition to the culinary scene, has a rich and fascinating history that spans back several decades. Founded by the visionary restaurateur, Giovanni Rossi, in 1985, the restaurant was a humble trattoria tucked away in a small village in the heart of Italy. With an unwavering passion for showcasing authentic Italian flavors, Giovanni and his family poured their heart and soul into creating a dining experience that celebrated the traditions and heritage of Italian cuisine.<br><br>Over the years, Delizioso Gusto garnered a loyal following and gained recognition for its exceptional culinary offerings. Word of mouth spread, attracting visitors from near and far who were eager to taste the restaurant's renowned dishes. With each passing year, the restaurant flourished, expanding its menu and enhancing its ambiance to accommodate the growing demand for an unforgettable dining experience. Delizioso Gusto soon became a cherished destination, known for its warm hospitality, impeccable service, and, above all, its commitment to serving the most delectable Italian fare.<br><br>Today, Delizioso Gusto stands as a testament to the perseverance and dedication of the Rossi family. Passed down through generations, the restaurant continues to honor its roots while embracing innovation in the culinary world. Every dish that leaves the kitchen reflects the restaurant's unwavering commitment to using only the finest ingredients sourced from Italy and prepared with love and expertise. Whether it's the homemade pasta, the aromatic risotto, or the authentic wood-fired pizzas, each bite at Delizioso Gusto takes diners on a tantalizing journey through the flavors and traditions of Italy, creating memories that will last a lifetime."

    aboutUsPage.appendChild(text)
}