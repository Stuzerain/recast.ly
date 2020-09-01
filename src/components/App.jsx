import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import searchYoutube from '../lib/searchYouTube.js';
import Search from './Search.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      videoPlayer: exampleVideoData[0]
    };
  }

  componentDidMount() {
    this.getVideos('cats');
  }

  handleClick(video) {
    console.log('clicked');
    this.setState({
      videoPlayer: video
    });
  }

  submitSearch(query) {
    this.getVideos(query);
  }

  getVideos(query) {
    // debugger;
    var options = {
      key: this.props.API_KEY,
      query: query,
    };
    this.props.searchYouTube(options, (videos) => {
      // debugger;
      this.setState({
        videoList: videos,
        videoPlayer: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><Search submitSearch={this.submitSearch.bind(this)} /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video={this.state.videoPlayer} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><VideoList videos={this.state.videoList} handleClick={this.handleClick.bind(this)} /></h5></div>
          </div>
        </div>
      </div>
    );
  }


}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
