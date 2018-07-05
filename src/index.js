import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import { GOOGLE_API_KEY } from './vars';

const YOUTUBE_API_KEY = GOOGLE_API_KEY;

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    }   
    this.videoSearch('react js')
  }

  videoSearch(term){
    YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos, 
        selectedVideo: videos[0]
      });
    })
  }

  render(){
    const { videos, selectedVideo } = this.state;
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
