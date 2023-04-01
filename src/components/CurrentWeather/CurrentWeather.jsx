import './current-weather.css';
import {Box, Button, ThemeProvider, useTheme} from "@mui/material";

const CurrentWeather = () => {

    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Box>
                    <p>City</p>
                    <p>Weather description</p>
                </Box>
                <img alt='weather' src='' />
            </Box>
        </ThemeProvider>
    )
}

export default CurrentWeather;