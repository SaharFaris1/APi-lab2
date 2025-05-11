let container = document.getElementById("container");
let images = document.createElement("div");
container.appendChild(images);

function fetchRandomImage() {
    fetch("https://coffee.alexflipnote.dev/random.json")
        .then((response) => response.json())
        .then((data) => {
            images.innerHTML = ""; 
            let card = document.createElement("div");
            let img = document.createElement("img");
            img.src = data.file; 
            img.style.width = "300px";
            img.style.height = "300px"
            card.appendChild(img);
            images.appendChild(card);
        })
        .catch((error) => console.error('Error fetching data:', error));
}

fetchRandomImage();
setInterval(fetchRandomImage, 5000);
