import axios from 'axios'
import { API_URL } from "../utils/constants";

export async function getBanners(){
    try {
        const response = await axios.get(`${API_URL}/banners`)
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}