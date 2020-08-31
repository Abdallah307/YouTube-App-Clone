import axios from 'axios'


class YoutubeService {

    getApiKey(){
        let api_key = //TODO: here you paste your api_key
        return api_key
    }

    getData = (query)=>{
        let api_Key = this.getApiKey()
        return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${api_Key}`)
    }

    getHomeData = ()=>{
        let api_key = this.getApiKey()
        return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=netd muzik&type=video&key=${api_key}`)

    }
}

export default new YoutubeService();