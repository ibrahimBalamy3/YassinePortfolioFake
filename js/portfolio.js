import "../css/portfolio.css"

export const portfolio = ()=> {
    
    // select my seclect element 
    const selectEle = document.getElementById("Portfolio");

    // select my boxes-container
    const boxesArr = Array.from(document.querySelectorAll('.box'));

    // create the handleChange function
    const handleChange = (e)=> {
        // assing the current selected option value to the value variable
        const value = e.target.value

        // loop for every box the box-container contain
        boxesArr.forEach((box) => {
            // display all boxes
            box.style.display = 'block'

            // get the box category form data-category attribute
            const boxCategory = box.getAttribute('data-category')

            // check if the value equal the box category or not
            if(value != boxCategory) {
                box.style.display = 'none'
            }

            // if the option select was all display all boxes
            if (value == 'all') {
                box.style.display = 'block'
            }
        })
    }

    // add an event linteneer on selectEle for every change happend
    selectEle.addEventListener('change', handleChange, Event)

    
    //create an observer for the portfolio section
        // select the portfolio section 
        const portfolio = document.querySelector('#portfolio')
    
        // options
        const options = {
            root: null,
            rootMargin: '-100px'
        }
    
        // create a new observer for portfolio section 
        const portfolioObserver = new IntersectionObserver(function(entries, portfolioObserver) {
            entries.forEach((entry)=> {
                if(entry.isIntersecting) {
                    entry.target.classList.add('appearence')
                }
            })
        }, options) 
    
        // observe the portfolio section
        portfolioObserver.observe(portfolio)
}

export default portfolio