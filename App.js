import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component{
    state={video:[],
        SelectedVideo: null};
    componentDidMount(){
        this.onTermSubmit('Apple');
    }
    onTermSubmit= async term =>{
        const response = await youtube.get('/search',{
            params:{
                q: term
            }
        });
        this.setState({
            video: response.data.items,
            SelectedVideo: response.data.items[0]});
    };    
    onVideoSelect=(video)=>{
        this.setState({SelectedVideo:video});      
    };
    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.SelectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                videos={this.state.video} 
                                onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default  App;