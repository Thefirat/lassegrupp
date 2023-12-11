import { IDogResponse } from "../models/IDogResponse";
import { get } from "./ServiceBase";

export async function dogSearch ():Promise<IDogResponse>{
    const url:string = "https://dog.ceo/api/breeds/image/random";
    const data = await get<IDogResponse>(url);
        return data;
}
