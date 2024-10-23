const mainData = ()=> {

    const renderAnimeList = (arrAnime, ganres) => {
        console.log(ganres)
        console.log(arrAnime);
        
    }

    const renderTopViews = (arrTopViews) => {
        const wrapper = document.querySelector('.filter__gallery')
        wrapper.innerHTML=''
        arrTopViews.forEach(item => {   
            wrapper.insertAdjacentHTML('beforeend', `
                <div class="product__sidebar__view__item set-bg mix"
                    data-setbg="${item.image}">
                    <div class="ep"> ${item.rating} / 10</div>
                    <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
                    <h5><a href="/anime-details.html">${item.title}</a></h5>
                </div>`     
            );    
        })
       
        wrapper.querySelectorAll(".set-bg").forEach((item)=> {
            item.style.backgroundImage = `url(${item.dataset.setbg})`
        }) 
    }

    fetch('./db.json')
        .then((response)=> {
            return response.json()
        })
        .then((data)=> {
            const ganres = new Set()
                      
            data.anime.forEach(item => {
                ganres.add(item.ganre)
            })

            renderAnimeList(data.anime, ganres);
            renderTopViews(data.anime.sort((a,b) => b.views - a.views).slice(0,5)); 
                        
        })     
}

mainData()

