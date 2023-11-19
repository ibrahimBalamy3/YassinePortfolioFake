import '../css/index.css'
import header from './header'
import portfolio from './portfolio'
import home from './home'



header()
portfolio()
home()

// # observer for header 

    // select my section without portfolio & services sections 
    const sectionsArr = Array.from(document.querySelectorAll('section:not(#portfolio):not(#services)'))
    
    // options
    const options = {
        root: null,
        threshold: 0.5,
    }

    // create a new observer for my sections 
    const sectionObserver = new IntersectionObserver(function(entries, sectionObserver) {
        entries.forEach((entry)=> {
            if(entry.isIntersecting) {
                entry.target.classList.add('appearence')
            }
        })
    }, options) 

    //observe my sections
    sectionsArr.forEach((section)=> {
        sectionObserver.observe(section)
    })

