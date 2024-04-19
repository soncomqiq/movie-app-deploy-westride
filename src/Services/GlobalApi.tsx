import axios from "axios";
import { movieBaseUrl } from "../utils/constan";
import { API_KEY } from "../utils/constan";
import { IGetTrendingResponse } from "../interface/trendAll";

//https://api.themoviedb.org/3/trending/all/day?api_key=edd30aa38a66fd481aab68561f86ce5f

interface IGetTrendingAllResponse {
    status : number|undefined,
    data : IGetTrendingResponse
}

const getTrendingAll = {
    getTrendingVideos : async ():Promise<IGetTrendingAllResponse> => {
    const data = await axios.get(`${movieBaseUrl}/trending/all/day?api_key=${API_KEY}`)
    return data
    
}

}


export default getTrendingAll

