import axios from "axios";

const searchImages = async (item) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers:{
        Authorization:'Client-ID 47azRW2vYzx1o8DDkqMTt5xrXntfeOB19TzqK7-h6JY'
      }, 
      params:{
        query: item
      }
    })
    return response.data.results;
  }

  export default searchImages;