const navbarMenu = document.querySelector(".navbar .links");
        const menuBtn = document.querySelector(".navbar .menu-btn");
        const hideMenuBtn = navbarMenu.querySelector(".close-btn");

        //show mobile menu
        menuBtn.addEventListener("click", () => {
            navbarMenu.classList.toggle("show-menu");
        });

        //hide mobile menu
        hideMenuBtn.addEventListener("click", () => menuBtn.click());