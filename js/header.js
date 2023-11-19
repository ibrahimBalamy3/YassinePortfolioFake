import '../css/header.css'

export const header = () => {
    // select the header
    const headersec = document.querySelector('.header')

    // select the go to top button 
    const goTopBtn = document.querySelector('.top')

    //select the header
    const homeSection = document.getElementById('home')

    // handle the button click
    goTopBtn.onclick = ()=> {
        homeSection.scrollIntoView({
            block: "center",
            inline: "start",
            behavior: 'smooth'
        })
    }

    window.onscroll = ()=> {
        // set the shadow effect on the header on scrolling
        if(scrollY >= 35) {
            headersec.classList.add("shadow")
        }else {
            headersec.classList.remove("shadow")
        }
        
        // handle the opacity of the go to top button
        if (scrollY > 100) {
            goTopBtn.style.opacity = '1'
        }else {
            goTopBtn.style.opacity = '0'
        }
    }
}

export default header