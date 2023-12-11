//import axios from "axios";
import "./../scss/style.scss";
import { IDogResponse } from "./models/IDogResponse";
import { IMeal } from "./models/IMeal";
import { dogSearch, mealSearch } from "./Services/DogService";

/* console.log(dog); */

const imageContainer = document.getElementById("imageContainer");
/* const header = document.getElementById("header"); */

const createHtmlDog = async () => {
  const dog: IDogResponse = await dogSearch();
  if (imageContainer) {
    imageContainer.innerHTML = "";
  }

  const image = document.createElement("img");
  image.src = dog.message;
  image.alt = "dog";
  imageContainer?.appendChild(image);
};

setInterval(createHtmlDog, 5000);

createHtmlDog();

const createHtmlFood = async () => {
  const food: IMeal = await mealSearch();
  console.log(food);
  
  const foodContainer = document.getElementById("mainContent");
  if (foodContainer) {
    foodContainer.innerHTML = "";
  }
  const foodHeader = document.createElement("h2");
  const foodCategory = document.createElement("h5");
  const foodImage = document.createElement("img");
  const foodInstructions = document.createElement("p");
  const newButton = document.createElement("button");

  foodHeader.innerHTML = food.strMeal;
  foodCategory.innerHTML = food.strCategory;
  foodImage.src = food.strMealThumb;
  foodImage.alt = "Food";
  foodInstructions.innerHTML = food.strInstructions;
  newButton.innerHTML = "Ny rätt";

  foodContainer?.appendChild(foodHeader);
  foodContainer?.appendChild(foodCategory);
  foodContainer?.appendChild(foodImage);
  foodContainer?.appendChild(foodInstructions);
  foodContainer?.appendChild(newButton);
  newButton.addEventListener("click", () => {
    createHtmlFood();
  });
};

createHtmlFood();
