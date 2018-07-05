import React, { Component } from 'react';
/*
  Using import React, { Component } from 'react'; 
  is the same as
  const Component = React.Component;
*/ 
class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = {
      term: ''
    }
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
     return (
        <div className="search-bar">
          <input            
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
          />
        </div>
     );
  }
}

export default SearchBar;