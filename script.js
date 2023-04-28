console.log("Interactive Rating Component");

// Select the both the containers (sections)
const ratingContainer = document.querySelector(".rating-container");
const thankyouContainer = document.querySelector(".thankyou-container");

// Select the ratings buttons (1-5)
const ratingButtons = document.querySelectorAll(".rating-button");

// Display rating on thankyou page.
const displayRatings = document.querySelector(".display-ratings");

// Select Submit Button and add eventListener.
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();  
  ratingContainer.style.display = "none";  
  thankyouContainer.style.display = "flex";
  thankyouContainer.style.justifyContent = "center";
  thankyouContainer.style.alignItems = "center";

});

ratingButtons.forEach((button) => {  
  button.addEventListener("click", (event) => {
    event.preventDefault()  
    console.log("Clicked");
    rating = button.innerHTML;
    displayRatings.innerHTML = `You selected ${rating} out of 5`;
  });
});

