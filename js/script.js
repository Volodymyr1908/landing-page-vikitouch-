const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".header_text");
    const navLinks = document.querySelectorAll(".header_text li");
    const dropItem = document.querySelectorAll(".dropdown-item");
    const opasityTimeInterval = 200;
    let active = false;
    burger.addEventListener("click", () => {
        //Toggle nav
        if (active) {
            let currentInterval = 0;
            for (let i = dropItem.length - 1; i >= 0; i--) {
                setTimeout(() => {
                    dropItem[i].classList.remove("dropdown-item-active");
                }, currentInterval);
                currentInterval += opasityTimeInterval;
            }
            setTimeout(() => {
                dropItem.forEach((e) => e.style.display = "none")
                nav.classList.remove("nav-active");
            }, currentInterval + 100);

        } else {

            nav.classList.add("nav-active");
            setTimeout(() => {
                let currentInterval = 100;
                for (let i = 0; i < dropItem.length; i++) {
                    dropItem[i].style.display = "block";
                    setTimeout(() => {
                        dropItem[i].classList.add("dropdown-item-active");
                    }, currentInterval);
                    currentInterval += opasityTimeInterval;
                }
            },500)
        }
        //Animate Links
        // navLinks.forEach((link, index) => {
        //     if (link.style.animation) {
        //         link.style.animation = ""
        //     } else {
        //         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        //     }
        // });
        //Burger Animation
        burger.classList.toggle("toggle");
        active = !active
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



