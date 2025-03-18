const url = "http://localhost:8080/filmes"

function carregarFilmes() {
    fetch(url)
        .then(response => response.json())
        .then(filmes => {
            let lista = document.querySelector("#lista")
            lista.innerHTML = ""
            filmes.forEach(filme => lista.innerHTML += card(filme))
        })
}
 
function favoritar(id) {
    const config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch(`${url}/${id}`, config)
        .then(response => response.json())
        .then(() => carregarFilmes())
        
}

function apagar(id) {
    const config = {
        method: "DELETE"
    }

    fetch(`${url}/${id}`, config)
        .then(() => carregarFilmes())
}

carregarFilmes()

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
                        <button class="btn btn-primary" id="btn-favoritar" onclick="favoritar(${filme.id})">                        
                            ${filme.favorito ? '<i class="bi bi-heart-fill"></i>' : '<i class="bi bi-heart"></i>'}
                        </button>
                        <button class="btn btn-danger" id="btn-apagar" onclick="apagar(${filme.id})">
                            <i class="bi bi-trash"></i>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    `
}