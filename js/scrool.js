const scrool = function() {
    const scroolBtn = document.querySelector('#scrollToTopButton')

    scroolBtn.addEventListener('click', (e)=> {
        
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        console.log(e)
    })
}

scrool()