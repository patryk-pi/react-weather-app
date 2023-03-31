import './current-weather.css';
import {Box, Button, ThemeProvider, useTheme} from "@mui/material";

const CurrentWeather = () => {

    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
        <Box>
            <Box>
<Button>Jakis przycisk</Button>
            </Box>
        </Box>
        </ThemeProvider>
    )
}

export default CurrentWeather;