//import axios from "axios";
import "./../scss/style.scss";
import { IDogResponse } from "./models/IDogResponse";
import { IMeal } from "./models/IMeal";
import { dogSearch, mealSearch } from "./Services/DogService";

//https://m.media-amazon.com/images/I/71bUZ1qlr5L.__AC_SX300_SY300_QL70_ML2_.jpg
//https://img-cdn.sfanytime.com/COVERM/6045355c-f4d3-43a3-b2da-9f81010f55fe_COVERM_SV.jpg?w=375&ar=0.692&fit=crop&fm=pjpg&s=ed4ecb05374c108f737f900613811653

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
  //console.log(food);
  
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

  foodHeader.className = "foodHeader display-4";
  foodCategory.className = "foodCategory display-6";
  foodImage.className = "foodImage img-fluid";
  foodInstructions.className = "foodInstructions";
  newButton.className = "newButton btn btn-success";

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
