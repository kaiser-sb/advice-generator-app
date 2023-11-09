let refresh = document.getElementById("refresh")
let adviceContainer = document.getElementById("advice")
let id = document.getElementById("advice-id")
let text = document.getElementById("advice-text")

let apiUrl = "https://api.adviceslip.com/advice"

window.onload = (e) => {
    generateAdvice()
}

refresh.addEventListener("click", (e) => {
    generateAdvice()
})

/* Generate a new advice on the trigger of an event (click or loading) */

function generateAdvice() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => populateAdvice(data))
    .catch(error => console.error('Error:', error));

    function populateAdvice(json) {
        id.innerHTML = json.slip.id;
        text.innerHTML = json.slip.advice
    }
}


