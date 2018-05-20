import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import Search from 'react-search-box';
import Workflows from './components/workflow-tile';

const App = () =>{
    return(
        <div>
            <SearchBar />
            <Workflows />
        </div>
        // <div>
        //     <Workflow />
        // </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));