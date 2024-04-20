function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput= document.querySelector ("#search-form-input");
    let placeElement= document.querySelector("#place");
    placeElement.innerHTML = searchInput.ariaValueMax;
}

let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);