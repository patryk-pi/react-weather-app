import './current-weather.css';
import {Box, Button, ThemeProvider, useTheme} from "@mui/material";

const CurrentWeather = ({data}) => {

    const theme = useTheme();

    const parameterLabel = {
        textAlign: 'left',
        fontWeight: 400,
        fontSize: '12px'
    }

    const parameterValue = {
        textAlign: 'right',
        fontWeight: '600',
        fontSize: '12px'
    }

    const parameterRow = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                width: '400px',
                background: "#444",
                borderRadius: '6px',
                boxShadow: '10px 10px 20px 2px rgba(0,0,0,.3)',
                color: '#fff',
                m: '10px auto 0 auto',
                p: '0 20px 20px 20px'
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box>
                        <p
                            style={{
                                fontWeight: '600',
                                fontSize: '18px',
                                lineHeight: 1,
                                margin: 0,
                                letterSpacing: '1px'
                            }}>
                            {data.city}
                        </p>
                        <p
                            style={{
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: 1,
                                margin: '10px 0 0px'
                            }}>
                            {data.weather[0].description}
                        </p>
                    </Box>
                    <img
                        alt='weather'
                        src={`icons/${data.weather[0].icon}.png`}
                        style={{
                            width: '100px'
                        }}
                    />
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <p style={{
                        fontWeight: 600,
                        fontSize: '70px',
                        margin: '10px 0'
                    }}>{Math.round((data.main.temp))}°C</p>
                    <Box sx={{
                        width: '50%',
                        paddingLeft: '20px'
                    }}>
                        <Box sx={parameterRow}>
                            <span style={parameterLabel}>Details</span>
                        </Box>
                        <Box sx={parameterRow}>

                            <span style={parameterLabel}>Feels like</span>
                            <span style={parameterValue}>{Math.round((data.main.feels_like))}°C</span>
                        </Box>
                        <Box sx={parameterRow}>

                            <span style={parameterLabel}>Wind</span>
                            <span style={parameterValue}>{Math.round((data.wind.speed))} m/s</span>
                        </Box>
                        <Box sx={parameterRow}>
                            <span style={parameterLabel}>Humidity</span>
                            <span style={parameterValue}>{data.main.humidity}%</span>
                        </Box>
                        <Box sx={parameterRow}>
                            <span style={parameterLabel}>Pressure</span>
                            <span style={parameterValue}>{data.main.pressure} hPa</span>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default CurrentWeather;