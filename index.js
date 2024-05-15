let btnEl = document.getElementById("jokeBtn")
let textEl = document.getElementById("jokeText")
let spinnerEl = document.getElementById("spinner")

function joke() {
    let url = "https://apis.ccbp.in/jokes/random"
    let options = {
        method: "GET"
    }
    spinnerEl.classList.remove("d-none");
    textEl.classList.add("d-none");

    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsondata) {
            spinnerEl.classList.add("d-none");
            textEl.classList.remove("d-none");

            let randomJoke = jsondata.value;
            textEl.textContent = randomJoke
        })


}
btnEl.addEventListener("click", joke)