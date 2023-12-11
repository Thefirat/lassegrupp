//import axios from "axios";
import "./../scss/style.scss";
import { IDogResponse } from "./models/IDogResponse";
import { dogSearch } from "./Services/DogService";

const dog: IDogResponse = await dogSearch();
console.log(dog);

