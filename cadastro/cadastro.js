const url = "http://localhost:8080/filmes"
const alert = document.querySelector("#alert")

document.querySelector("form").addEventListener("submit", event =>{
    event.preventDefault()
    alert.classList.add("d-none")

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    fetch(url, config)
        .then(response => response.json())
        .then(() => window.location.href = "../")
        .catch(error => {
            alert.classList.remove("d-none")
            alert.innerText = error.message
        })

})

document.querySelector("#btn-mickey").addEventListener("click", () => {
    document.querySelector("#titulo").value = "Mickey 17"
    document.querySelector("#sinopse").value = "Mickey 17 é um dispensável, um empregado descartável numa expedição humana para colonizar um mundo de gelo conhecido como Niflheim. Quando uma versão morre, um novo corpo é clonado com a maior parte das suas memórias intactas. Baseado no livro de Edward Ashton."
    document.querySelector("#poster").value = "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/5eZTyuqOzK4PuKrcOX3ixafBjcd.jpg"
    document.querySelector("#trailer").value = "https://www.youtube.com/watch?v=l5UViFog99Y"
    document.querySelector("#generos").value = "Ficção Científica, Comédia, Aventura"
})

document.querySelector("#btn-branca").addEventListener("click", () => {
    document.querySelector("#titulo").value = "Branca de Neve"
    document.querySelector("#sinopse").value = "A princess joins forces with seven dwarfs to liberate her kingdom from her cruel stepmother, the Evil Queen."
    document.querySelector("#poster").value = "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/t0mabA2l3KE9Ai350BEKz61Ltor.jpg"
    document.querySelector("#trailer").value = "https://www.youtube.com/watch?v=KsSoo5K8CpA"
    document.querySelector("#generos").value = "Família, Fantasia"
})

document.querySelector("#btn-state").addEventListener("click", () => {
    document.querySelector("#titulo").value = "Estado Elétrico"
    document.querySelector("#sinopse").value = "Uma adolescente órfã faz-se à estrada com um misterioso robô para encontrar o irmão desaparecido e une-se a um contrabandista e ao seu parceiro divertido."
    document.querySelector("#poster").value = "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/mUBxeBpI5xg66YhLJxg8Ppv0ArW.jpg"
    document.querySelector("#trailer").value = "https://www.youtube.com/watch?v=QIw6ITiwgBU"
    document.querySelector("#generos").value = "Ficção Científica, Aventura, Drama"
})