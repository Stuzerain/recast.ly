import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';

var App = (props) => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><VideoPlayer videos={props.videos} /></h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><VideoList videos={props.videos} /></h5></div>
      </div>
    </div>
  </div>
);

// videos={exampleVideoData}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
