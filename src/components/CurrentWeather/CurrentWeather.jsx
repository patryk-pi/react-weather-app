import './current-weather.css';
import {Box, Button, ThemeProvider, useTheme} from "@mui/material";

const CurrentWeather = () => {

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
                width: '300px',
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
                            City
                        </p>
                        <p
                            style={{
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: 1,
                                margin: '10px 0 0px'
                            }}>
                            Weather description
                        </p>
                    </Box>
                    <img
                        alt='weather'
                        src='icons/01d.png'
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
                        width: 'auto',
                        letterSpacing: '-5px',
                        margin: '10px 0'
                    }}>18C</p>
                    <Box sx={{
                        width: '100%',
                        paddingLeft: '20px'
                    }}>
                        <Box sx={parameterRow}>
                            <span style={parameterLabel}>Details</span>
                        </Box>
                        <Box sx={parameterRow}>

                            <span style={parameterLabel}>Feels like</span>
                            <span style={parameterValue}>Value</span>
                        </Box>
                        <Box sx={parameterRow}>

                            <span style={parameterLabel}>Wind</span>
                            <span style={parameterValue}>2 m/s</span>
                        </Box>
                        <Box sx={parameterRow}>
                            <span style={parameterLabel}>Humidity</span>
                            <span style={parameterValue}>15%</span>
                        </Box>
                        <Box sx={parameterRow}>
                            <span style={parameterLabel}>Pressure</span>
                            <span style={parameterValue}>988 hPa</span>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default CurrentWeather;