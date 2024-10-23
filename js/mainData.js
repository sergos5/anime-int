const mainData = ()=> {

    const renderGanreList = (ganres) => {
        const dropdownBlock = document.querySelector('.header__menu .dropdown')
        //dropdownBlock.innerHTML = ''
        ganres.forEach(ganre => {
            dropdownBlock.insertAdjacentHTML('beforeend', `
                <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
            `)
        })
    }

    const renderAnimeList = (arrAnime, ganres) => {
        const wrapper = document.querySelector('.product .col-lg-8')
        //wrapper.innerHTML = ''
        ganres.forEach(ganre => {
            const productBlock = document.createElement('div')
            const listBlock = document.createElement('div')      
            const list = arrAnime.filter(item => item.ganre === ganre)
               
            listBlock.classList.add('row')
            
            listBlock.classList.add('mb-5')
            productBlock.insertAdjacentHTML('beforeend', `
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <div class="section-title">
                            <h4>${ganre}</h4>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="btn__all">
                            <a href="/categories.html?ganre=${ganre}" class="primary-btn">View All <span class="arrow_right"></span></a>
                        </div>
                    </div>
                </div>
            `)    
            
            list.forEach(item => {                   
                const tagsBlock = document.createElement('ul')

                item.tags.forEach(tag => {
                    tagsBlock.insertAdjacentHTML('beforeend', `
                        <li>${tag}</li>     
                    `)
                })
                
                listBlock.insertAdjacentHTML('beforeend', `
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="${item.image}">
                                <div class="ep">${item.rating} / 10</div>
                                <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
                            </div>
                            <div class="product__item__text">
                                ${tagsBlock.outerHTML}
                                <h5><a href="/anime-details.html?itemId=${item.id}">${item.title}</a></h5>
                            </div>
                        </div>
                    </div>
                `)
            })

            wrapper.append(productBlock)
            wrapper.append(listBlock)

            wrapper.querySelectorAll(".set-bg").forEach((item)=> {
                item.style.backgroundImage = `url(${item.dataset.setbg})`
            })
        })        
    }

    const renderTopViews = (arrTopViews) => {
        const wrapper = document.querySelector('.filter__gallery')
        //wrapper.innerHTML=''
        arrTopViews.forEach(item => {   
            wrapper.insertAdjacentHTML('beforeend', `
                <div class="product__sidebar__view__item set-bg mix"
                    data-setbg="${item.image}">
                    <div class="ep"> ${item.rating} / 10</div>
                    <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
                    <h5><a href="/anime-details.html?itemId=${item.id}">${item.title}</a></h5>
                </div>`     
            );    
        })
       
        wrapper.querySelectorAll(".set-bg").forEach((item)=> {
            item.style.backgroundImage = `url(${item.dataset.setbg})`
        }) 
    }

    fetch('./db.json')
        .then((response)=> response.json())
        .then((data)=> {
            const ganres = new Set()
                      
            data.anime.forEach(item => {
                ganres.add(item.ganre)
            })
            renderTopViews(data.anime.sort((a,b) => b.views - a.views).slice(0,5)); 
            renderAnimeList(data.anime, ganres);
            renderGanreList(ganres)                               
        })     
}

mainData()

