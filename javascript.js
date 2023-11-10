let refresh = document.getElementById("refresh")
let adviceContainer = document.getElementById("advice")
let id = document.getElementById("advice-id")
let text = document.getElementById("advice-text")

let loader = document.getElementById("loader")

let apiUrl = "https://api.adviceslip.com/advice"

window.onload = (e) => {
    loader.style.display = "block"
    generateAdvice()
}

refresh.addEventListener("click", (e) => {
    loader.style.display = "block"
    id.innerHTML = "#"
    text.innerHTML = "Loading ...."
    generateAdvice()
})

/* Generate a new advice on the trigger of an event (click or loading) */

function generateAdvice() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => populateAdvice(data))
    .catch(error => console.error('Some error has occured', error));

    function populateAdvice(json) {
        loader.style.display = "none"
        id.innerHTML = json.slip.id;
        text.innerHTML = `"${json.slip.advice}"`;
    }
}


