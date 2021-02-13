import React,{useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import useVideos from '../hooks/UseVideos';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
const App=()=>{
    const [SelectedVideo,setSelectedVideo]=useState(null);
    const [videos,search]=useVideos('Apple');
    useEffect(()=>{
        setSelectedVideo(videos[0]);
    },[videos]);
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={search}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={SelectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                videos={videos} 
                                onVideoSelect={setSelectedVideo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default  App;