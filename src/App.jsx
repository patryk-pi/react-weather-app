import {useState} from 'react'

import './App.css'
import Search from "./components/Search/Search.jsx";
import {geoApiOptions, geoApiUrl} from "./Api.jsx";

function App() {

    const handleOnSearchChange = searchData => {
        console.log(searchData);
    }

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange}/>
        </div>
    )
}

export default App
