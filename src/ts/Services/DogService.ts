import { IDogResponse } from "../models/IDogResponse";
import { IMeal } from "../models/IMeal";
import { IMealResponse } from "../models/IMealResponse";
import { get } from "./ServiceBase";

export async function dogSearch ():Promise<IDogResponse>{
    const url:string = "https://dog.ceo/api/breeds/image/random";
    const data = await get<IDogResponse>(url);
        return data;
}


export async function mealSearch ():Promise<IMeal>{
    const url:string = "https://www.themealdb.com/api/json/v1/1/random.php";
    const data = await get<IMealResponse>(url);
        return data.meals[0];
}
