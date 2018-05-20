import React, { Component } from 'react';
import Search from 'react-search-box';
import jsonData from '../resource/WorkflowData.json';

import '../../style/style.css';

export default class SearchBar extends Component {
  constructor() {
    super();
    console.log(jsonData);   
    
    this.state = {        
      data: jsonData,
      loading: false
    };
  }

//   componentDidMount() {
//     this.setState({
//       loading: true
//     });

//     fetch('https://api.github.com/search/repositories?q=topic:ruby+topic:rails')
//     .then(res => res.json())
//     .then(data => {
//       this.setState({
//         data: data.items,
//         loading: false
//       });
//       console.log(data);
//     })    
//   }

  handleChange(value) {
    console.log(value);
    console.log(this.jsonData);
  }

  render() {
    
    if (this.state.loading) {
      return (
        <div className="app__loading">Loading...</div>
      );
    }

    return (
      <div className="app">
        <div className="app__header">
          <div className="header__title">
            <h2>Workflow Explorer</h2>
          </div>
          
        </div>
        <div className="app__content">
          <div className="content__search content__search--with-full_name">
            <div className="search__info">
              <h4>Search Workflow</h4>
            </div>
            <div className="search__component">
              <Search
                data={ this.state.data }
                onChange={ this.handleChange.bind(this) }
                placeholder="Search for a string..."
                class="search-class"
                searchKey="Name"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// import React, {Component} from 'react';

// class SearchBar extends Component {
//     constructor(props){
//         super(props);

//         this.state = {term:'a'};
//     }
//     render() {
//         return(
//             <div>
//                 <input
//                     value = {this.state.term}
//                     onChange = {event => this.setState({term: event.target.value})} />
//             </div>
//         ); }
// };

// export default SearchBar;
