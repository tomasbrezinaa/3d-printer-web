const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// ak niekto klikne 
navToggle.addEventListener("click" , () => {  
    
    const visibility = nav.getAttribute("data-visible");
    // ak je menu zatvorené , otvor ho , ak je otvorené zavri ho 
    if (visibility === "false") {
        nav.setAttribute("data-visible" , true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible" , false);
        navToggle.setAttribute("aria-expanded", false);

    }

} )







