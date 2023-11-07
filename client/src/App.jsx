import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';
import { Form } from 'react-bootstrap';
import WeatherCard from './components/WeatherCard/WeatherCard';


function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const trimmedValue = city.trim();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!trimmedValue) {
      return;
    };

    try {
      setWeatherData(null);

      const response = await fetch(`http://localhost:3001/weather?city=${trimmedValue}`);

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      setError(null);
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="App">
      <Form className='search-block' onSubmit={onSubmit}>
        <Form.Control onChange={e => setCity(e.target.value)} value={city} className='w-50' type="text" placeholder="enter the city" />
        <Button type='submit' disabled={!trimmedValue} className='ms-3' variant="primary">search</Button>
      </Form>
      {error && <div className='error'>{error}</div>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
