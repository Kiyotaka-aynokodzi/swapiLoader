const films = document.querySelector('.films')
const postApi = (film) => {
    const filmDiv = document.createElement('div')
    filmDiv.classList.add('film')
    filmDiv.innerHTML =
        `<h2>${film.title}</h2>
        <p>${film.episode_id}</p>
        <p>${film.opening_crawl}</p>
        `

    films.append(filmDiv)
}

const errorapi = () => {
    const divErr = document.createElement('div')
    divErr.classList.add('error')
    divErr.innerHTML =
        `Ошибка`
    films.append(divErr)
}

const loadApi = () => {
    const divLoading = document.createElement('div')
    divLoading.classList.add('load')
    divLoading.innerHTML =
        `<div class="preloader">
        <div class="loader"></div>
      </div>`

    films.append(divLoading)
}
const deLoadApi = () => {
    const delLoad = document.querySelector('.load')
    delLoad.innerHTML = ''
}

const responseApi = async () => {
    loadApi()
    try {
        const filmsUrl = await fetch("https://swapi.dev/api/films")
        const jsonUrl = await filmsUrl.json()
        pudge = jsonUrl.results.map(films => postApi(films))
    } catch (error) {
        errorapi()
    } finally {
        deLoadApi()
    }
}

responseApi()
