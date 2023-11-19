export const home = ()=> {
    // select the buttons
    const explore = document.getElementById("explore")
    const collaborate = document.getElementById("collaborate")

    // select the portfolio section
    const portfolioSection = document.getElementById("portfolio")

    // select the services section
    const servicesSection = document.getElementById("services")

    // handle click function
    const handleClick = (e)=> {
        // get the id attribute value 
        const id = e.target.getAttribute("id")

        // scroll to the right section
        if (id == "collaborate") {
            servicesSection.scrollIntoView({
                behavior: "smooth",
                block: 'start',
                inline: "start"
            })
        }else {
            portfolioSection.scrollIntoView({
                behavior: "smooth",
                block: 'start',
                inline: "start"
            })
        }
    }
    
    // added the event listener to the explore & collaborate button
    explore.addEventListener('click', handleClick, Event)
    collaborate.addEventListener('click', handleClick, Event)

}

export default home