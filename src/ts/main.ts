//import axios from "axios";
import "./../scss/style.scss";
import { cursor } from "./models/functions";
import { IDogResponse } from "./models/IDogResponse";
import { IMeal } from "./models/IMeal";
import { dogSearch, mealSearch } from "./Services/DogService";

//https://m.media-amazon.com/images/I/71bUZ1qlr5L.__AC_SX300_SY300_QL70_ML2_.jpg
//https://img-cdn.sfanytime.com/COVERM/6045355c-f4d3-43a3-b2da-9f81010f55fe_COVERM_SV.jpg?w=375&ar=0.692&fit=crop&fm=pjpg&s=ed4ecb05374c108f737f900613811653

const handleBrokenImage = (event: Event) => {
  const placeholderImage = "https://pixabay.com/get/g4e3ac3ce7c26c1a31a47c6dabf723df0e24429fab74ec209d5dc1fd3cd169e88c0a9a96013c5e94bd869b8510eddfe1ca4c3af9ae9d50deb2019d299fd70ac8178267450a56abdad7bc8dc234beab8d6_640.jpg"
  const target = event.target as HTMLImageElement;
  if (target) {
    target.src = placeholderImage;
  }
};
/* console.log(dog); */
const bigImageContainer = document.getElementById("imageContainer");
/* const header = document.getElementById("header"); */
window.addEventListener("mousemove", cursor);

const createHtmlDog = async () => {
  if (bigImageContainer) {
    bigImageContainer.innerHTML = "";
  }
  let dogs:IDogResponse[] = [];
  for(let i = 0;i < 5;i++){
  const dog: IDogResponse = await dogSearch();
  dogs.push(dog);
};
  for(let i = 0;i < dogs.length;i++){
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");

    image.addEventListener("error", handleBrokenImage);

    image.src = dogs[i].message;
    image.alt = "dog";

    bigImageContainer?.appendChild(imageContainer);
    imageContainer.appendChild(image);
  }
}

setInterval(createHtmlDog, 10000);

createHtmlDog();

const createHtmlFood = async () => {
  const food: IMeal = await mealSearch();
  //console.log(food);
  
  const foodContainer = document.getElementById("mainContent");
  if (foodContainer) {
    foodContainer.innerHTML = "";
    foodContainer.className = "foodContainer";
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

await createHtmlFood();

