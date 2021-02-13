import {useState,useEffect} from 'react';
import youtube from '../api/youtube';

const UseVideos=(defaultSearchTerm)=>{
    const [video,setVideo]=useState([]);
    useEffect(()=>{
        search(defaultSearchTerm);
    },[defaultSearchTerm]);
    const search= async term =>{
        const response = await youtube.get('/search',{
            params:{
                q: term
            }
        });
        setVideo(response.data.items);
    };    
    return [video,search];
}
export default UseVideos;