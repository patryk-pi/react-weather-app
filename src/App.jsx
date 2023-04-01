import {useState} from 'react'

import './App.css'
import Search from "./components/Search/Search.jsx";
import {geoApiOptions, geoApiUrl, weatherApiKey, weatherApiUrl} from "./Api.jsx";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.jsx";
import {theme} from "./Theme";
import {ThemeProvider} from "@mui/material";

function App() {

    const [currentWeather, setCurrenWeather] = useState(null)
    const [currentForecast, setCurrenForecast] = useState(null)


    const handleOnSearchChange = searchData => {
        const [lat, lon] = searchData.value.split(' ');

        const currentWeatherFetch = fetch(`${weatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`);

        const forecastFetch = fetch(`${weatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`);

        Promise.all([currentWeatherFetch, forecastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();

                setCurrenWeather({city: searchData.label, ...weatherResponse});
                setCurrenForecast({city: searchData.label, ...forecastResponse})
            })
            .catch((err) => console.log(err));
    }

    console.log(currentForecast, currentWeather)

    return (
        <ThemeProvider theme={theme}>
            <div className="container">
                <Search onSearchChange={handleOnSearchChange}/>
                { currentWeather && <CurrentWeather data={currentWeather}/> }
            </div>
        </ThemeProvider>
    )
}

export default App
