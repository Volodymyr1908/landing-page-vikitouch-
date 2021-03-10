const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".header_text");
    const navLinks = document.querySelectorAll(".header_text li")

    burger.addEventListener("click", () => {
        //Toggle nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
}
navSlide();


function changeBg() {   //first page slider

    let path = "url(./assets/bc/";
    let ext = ".jpg)";
    let backs = [];

    for (let i = 1; i <= 3; i++) {
        let fileNum = ('00' + i).substr(-3);
        let fullPath = path + fileNum + ext;
        backs.push(fullPath);
    }

    let randomImg = Math.floor(Math.random() * backs.length);

    document.querySelector('.first_section').style.background = (backs[randomImg]);
    document.querySelector('.first_section').style.backgroundSize = "cover";
    document.querySelector('.first_section').style.backgroundRepeat = "no-repeat";
    document.querySelector('.first_section').style.backgroundPosition = "center center";

}
// setInterval(changeBg, 5000);


document.querySelector(".app_button").addEventListener("click", ()=> {
    window.location.href = "https://client.appointer.com.ua/uk/widget?for=viki-touch"
});



