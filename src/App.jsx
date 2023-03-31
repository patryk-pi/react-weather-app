import {useState} from 'react'

import './App.css'
import Search from "./components/Search/Search.jsx";
import {geoApiOptions, geoApiUrl} from "./Api.jsx";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.jsx";
import {theme} from "./Theme";
import {ThemeProvider} from "@mui/material";

function App() {


    const handleOnSearchChange = searchData => {
        console.log(searchData);
    }

    return (
        <ThemeProvider theme={theme} >
            <div className="container">
                <Search onSearchChange={handleOnSearchChange}/>
                <CurrentWeather/>
            </div>
        </ThemeProvider>
    )
}

export default App
