const NavFunctions = () => {
    const nav = document.querySelector('.nav-links');
    const btn = document.querySelector('.burger');
    const navLinks = document.querySelectorAll('.nav-links li');

    btn.addEventListener('click',(()=>{
        //  Nav Toggler 
        nav.classList.toggle('nav-active');
        console.log("Abhishek");

        // HamBurger Toggler
        btn.classList.toggle('toggle')


    }))

}

NavFunctions();