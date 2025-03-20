const url = "http://localhost:8080/filmes"

function carregarFavoritos(){
    fetch(`${url}/favoritos`)
        .then(response => response.json())
        .then(filmes => {
            let lista = document.querySelector("#lista")
            lista.innerHTML = ""

            if(filmes.length == 0){
                lista.innerHTML = `
                    <div class="alert alert-info" role="alert">
                        nenhum filme favoritado
                    </div>`
                return
            }
            filmes.forEach(filme => lista.innerHTML += card(filme))
        })
}

carregarFavoritos()

function card(filme) {
    return `
        <div class="card m-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${filme.poster}"
                        class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${filme.titulo}</h5>
                        <p class="card-text">${filme.sinopse}</p>
                        <p class="card-text"><small class="text-body-secondary">${filme.generos}</small></p>
                        <a href="${filme.trailer}" target="_blank" class="btn btn-danger">
                        <i class="bi bi-play-btn-fill"></i>
                        Ver Trailer
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
}