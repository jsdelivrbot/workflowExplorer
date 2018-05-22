import React, { Component } from 'react';
import Search from 'react-search-box';
import jsonData from '../resource/WorkflowData.json';
import Workflows from './workflow-grid';

import '../../style/style.css';

export default class SearchBar extends Component {
  
  constructor() {
    super();
    this.filterData = this.filterData.bind(this);
    var arr = [];     
    var workflowTile=[];
      Object.keys(jsonData).forEach(function(key) {
        arr.push(jsonData[key]);
      });
    this.state = {        
      data: jsonData,
      loading: false,
      searchValue:'',
      filteredWorkFlow: arr
    };
  }

  filterData (returnedData) {
    console.log("Filter data called"+returnedData);
    if(returnedData==null){ this.setState({filteredWorkFlow:this.arr})}
    else this.setState({filteredWorkFlow: returnedData});
    this.arr = returnedData;
    console.log("Filter data called2"+ this.state.filteredWorkFlow);
};

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
    this.setState({searchValue:value});
  };

  render() {
    
    if (this.state.loading) {
      return (
        <div className="app__loading">Loading...</div>
      );
    }

    return (
      <div className="app">
        <div className="app__header">
          
        </div>
        <div className="app__content">
          <div className="content__search content__search--with-full_name">

            <div className="search__component">
              <Search
                data={ this.state.data }
                onChange={ this.handleChange.bind(this) }
                placeholder="Search for a string..."
                class="search-class"
                searchKey="Name"
                getData = {this.filterData}
              />
            </div>
          </div>
        </div>        
        <Workflows value = {this.state.filteredWorkFlow} />
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
