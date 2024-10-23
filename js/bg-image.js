const bgImage = () => {
    const elements = document.querySelectorAll(".set-bg")

    elements.forEach((item)=> {
        item.style.backgroundImage = `url(${item.dataset.setbg})`
    })  
}

bgImage()
