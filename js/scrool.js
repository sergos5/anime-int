const scrool = ()=> {
    const scroolBtn = document.querySelector('#scrollToTopButton')

    scroolBtn.addEventListener('click', (e)=> {        
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })       
    })
}

scrool()