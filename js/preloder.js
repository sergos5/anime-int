const preloder = function(){
    const preloder = document.querySelector('.preloder')

    preloder.classList.add("active")

    setTimeout(()=> {
        preloder.classList.remove("active")
    }, 500)
}

preloder()


