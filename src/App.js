import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, createTheme, ThemeProvider } from '@mui/material';
import Search from './components/Search';
import Main from './components/Main';
import Widget from './components/Widget';
import axios from 'axios';
import ErrorPage from './components/ErrorPage';

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins'],
  },
  palette: {
    primary: {
      main: '#DB5A42',
    },
    secondary: {
      main: '#DB5A42',
    },
  },
});

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const defaultCity = localStorage.getItem('city') || 'Iloilo';

  useEffect(() => {
    fetchWeather(defaultCity);
  }, [defaultCity]);

  const fetchWeather = async (city) => {
    setLoading(true);

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8370452805f200bc9bad722c3948a15d`);
      setWeatherData(response?.data);
      localStorage.setItem('city', response?.data?.name);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            maxWidth: '550px',
            width: '100%',
            justifyContent: 'center',
            margin: 'auto',
            flexDirection: 'column',
          }}
        >
          <Search fetchWeather={fetchWeather} />
          {error ? (
            <ErrorPage />
          ) : (
            <>
              <Main
                city={weatherData?.name}
                country={weatherData?.sys?.country}
                icon={weatherData?.weather[0]?.icon}
                temp={weatherData?.main?.temp}
                weatherDescription={weatherData?.weather[0]?.description}
              />
              <Widget
                temp={weatherData?.main?.temp}
                feelsLike={weatherData?.main?.feels_like}
                humidity={weatherData?.main?.humidity}
                wind={weatherData?.wind?.speed}
              />
            </>
          )}
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
