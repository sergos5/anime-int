const detailData = () => {
    const preloder = document.querySelector('.preloder')

    const renderGanreList = (ganres) => {
        const dropdownBlock = document.querySelector('.header__menu .dropdown')    
        ganres.forEach(ganre => {
            dropdownBlock.insertAdjacentHTML('beforeend', `
                <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
            `)
        })
    }

    const renderAnimeDescr = (arrAnime, animeId) => {
        const animeObj = arrAnime.find(item => item.id == animeId)
       
        const breadCrumb = document.querySelector('.breadcrumb__links span')
        const animeBlock = document.querySelector('.anime__details__content')
        const animeImage = animeBlock.querySelector('.anime__details__pic')
        const animeView = animeBlock.querySelector('.view')
        const animeTitle = animeBlock.querySelector('.anime__details__title h3')
        const animeOriginalTitle = animeBlock.querySelector('.anime__details__title span')
        const animeDescr = animeBlock.querySelector('.anime__details__text p')
        const animeDetails = animeBlock.querySelector('.anime__details__widget ul')

        breadCrumb.textContent = animeObj.ganre        

        animeView.insertAdjacentHTML('beforeend', `
            <i class="fa fa-eye"></i> ${animeObj.views}
        `)

        animeTitle.textContent = animeObj.title
        animeOriginalTitle.textContent = animeObj['original-title']
        animeDescr.textContent = animeObj.description
        
        animeDetails.insertAdjacentHTML('beforeend', `
            <li><span>Год выпуска:</span> ${animeObj.date}</li>
            <li><span>Рейтинг:</span> ${animeObj.rating}</li>
            <li><span>Жарн:</span> ${animeObj.tags.join(', ')}</li>
        `)

        animeImage.dataset.setbg = animeObj.image
        animeBlock.querySelectorAll(".set-bg").forEach((item)=> {
            item.style.backgroundImage = `url(${item.dataset.setbg})`
        })

        setTimeout(()=> {
            preloder.classList.remove("active")
        }, 500)
    }

    fetch('./db.json')
        .then((response)=> response.json())
        .then((data)=> {
            const ganres = new Set()
            const animeId = new URLSearchParams(window.location.search).get('itemId')            
                                
            data.anime.forEach(item => {
                ganres.add(item.ganre)
            })
            
            if(animeId) {
                renderAnimeDescr(data.anime, animeId)
            } else {
                console.log('Аниме отсутствует');                
            }            
            renderGanreList(ganres)                               
        })       
}

detailData()