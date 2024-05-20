import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import WeatherTable from './WeatherTable';

const getLocation = (): Promise<{ latitude: number; longitude: number }> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Lokalizacja nie jest dostępna'));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
};

const Main: React.FC = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const { latitude, longitude } = await getLocation();
        setLatitude(latitude);
        setLongitude(longitude);
        console.log(latitude)
        console.log(longitude)
      } catch (error) {
        setError('Error location: ' + error);
      }
    };

    fetchLocation();
  }, []);

  if (latitude === null || longitude === null) {
    return <div>Loading location...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <React.StrictMode> 
      <WeatherTable latitude={latitude} longitude={longitude} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />);
