import axios from 'axios'
import { API_URL } from "../utils/constants";


 export async function getCollage(){
    try {
        const response = await axios.get(`${API_URL}/collages`)
        const result = await response.data //[4].Background
        return result
    } catch (error) {
        console.log(error);
    }
} 


/* export async function getCollage(){
    try {
        const url = `${API_URL}/collages`
        const response = await fetch(url)
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null
    }
} 
 */