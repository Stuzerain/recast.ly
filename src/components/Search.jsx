var Search = ({ submitSearch }) => (
  <div className="search-bar form-inline">
    <input className="form-control" id="searchBar" type="text" onChange={_.debounce((event) => {
      event.persist();
      submitSearch(event.target.value);
    }, 500)} />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);
//{_.debounce(props.func.bind(props.parent), 500)}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
