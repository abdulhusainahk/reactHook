import axios from 'axios';

const KEY ='AIzaSyDU0wi6c4JeYnOCFZ61kJxThxhcigR7w6k'
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});