/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid, Image } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const [weather, setWeather] = useState({ temperature: null, description: null, icon: null });
  const [error, setError] = useState('');
  const updateInterval = 300000; // Update every 5 minutes

  useEffect(() => {
    const bootstrapAsync = async () => {
      if (await requestLocationPermission()) {
        getLocationAndWeather();
        setInterval(getLocationAndWeather, updateInterval);
      }
    };

    bootstrapAsync();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Access Required",
          message: 'This app needs to access your location to provide weather updates',
          buttonPositive: "OK"
        }
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        throw new Error('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
      setError('Location permission is necessary to fetch weather information.');
      return false;
    }
    return true;
  };

  const getLocationAndWeather = async () => {
    const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (!hasPermission) {
      setError('Location permission not granted');
      return;
    }
  
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        getWeather(latitude, longitude);
      },
      error => {
        setError(`Failed to get location: ${error.message}`);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  const getWeather = async (latitude: number, longitude: number) => {
    const apiKey = '17c13aa4feb2b57368e50927e079a5e6';  // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const json = await response.json();
      if (json.main && json.weather) {
        setWeather({
          temperature: json.main.temp,
          description: json.weather[0].description,
          icon: json.weather[0].icon
        });
      } else {
        throw new Error('Weather data not available');
      }
    } catch (error) {
      setError('Failed to load weather data');
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {weather.temperature ? (
        <View style={styles.weatherSection}>
          <Image
            style={styles.weatherIcon}
            source={{ uri: `http://openweathermap.org/img/wn/${weather.icon}@2x.png` }}
          />
          <Text style={styles.weather}>Temperature: {weather.temperature}°C</Text>
          <Text style={styles.weather}>Conditions: {weather.description}</Text>
        </View>
      ) : (
        <Text style={styles.weather}>Loading weather...</Text>
      )}
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  weatherSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weather: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default App;
