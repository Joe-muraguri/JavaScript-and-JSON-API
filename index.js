const BASE_URL = "http://localhost:3000";
const firstBeerUrl = `${BASE_URL}/beers/1`;

//this function is going to display the beer details
const displayBeerDetails = (beerInfo) =>{
    const beerName = document.getElementById('beer-name');
    const beerImage = document.getElementById('beer-image');
    const beerDesc = document.getElementById('beer-description');
    const beerReview = document.getElementById('beer-reviews');

    beerName.textContent = beerInfo.name;
    beerImage.setAttribute('src', beerInfo.image_url);
    beerDesc.textContent = beerInfo.description;

    beerReview.innerHTML = "";

    //display the reviews here
    beerInfo.reviews.forEach((review) =>{
        const singleReview = document.createElement("li");
        singleReview.textContent = review;
        beerReview.appendChild(singleReview);
    })
}

//GET the first beer
fetch(firstBeerUrl)
    .then((response) => response.json())
    .then((data) =>{
        console.log(data);
        displayBeerDetails(data);
    })
    .catch((error) => console.error("ERROR:", error))