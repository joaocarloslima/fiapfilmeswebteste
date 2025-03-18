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