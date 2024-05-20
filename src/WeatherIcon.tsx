import React from 'react';

interface WeatherIconProps {
  x: number;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ x }) => {
  let iconSrc;

  switch (x) {
    case 0:
      iconSrc = '/sun-solid.svg'; 
      break;
    case 1:
      iconSrc = '/cloud-sun-solid.svg'; 
      break;
    case 2:
      iconSrc = '/cloud-sun-solid.svg'; 
      break;
    case 3:
      iconSrc = '/cloud-sun-solid.svg'; 
      break;
    case 45:
      iconSrc = '/weather-fog.svg'; 
      break;
    case 48:
      iconSrc = '/weather-fog.svg'; 
      break;
    case 51:
      iconSrc = 'weather-drizzle.svg'; 
      break;
    case 53:
      iconSrc = 'weather-drizzle.svg'; 
      break;
    case 55:
      iconSrc = 'weather-drizzle.svg'; 
      break;
    case 56:
      iconSrc = 'weather-drizzle.svg'; 
      break;
    case 57:
      iconSrc = 'weather-drizzle.svg'; 
      break;
    case 61:
      iconSrc = 'cloud-rain-solid.svg'; 
      break;
    case 63:
      iconSrc = 'cloud-rain-solid.svg'; 
      break;
    case 65:
      iconSrc = 'cloud-rain-solid.svg'; 
      break;
    case 66:
      iconSrc = 'freezing-raing.svg'; 
      break;
    case 67:
      iconSrc = 'freezing-raing.svg'; 
      break;
    case 71:
      iconSrc = 'snowflake-regular.svg'; 
      break;
    case 73:
      iconSrc = 'snowflake-regular.svg'; 
      break;
    case 75:
      iconSrc = 'snowflake-regular.svg'; 
      break;
    case 77:
      iconSrc = 'snowflake-regular.svg'; 
      break;
    case 80:
      iconSrc = 'cloud-showers-heavy-solid.svg'
      break;
    case 81:
      iconSrc = 'cloud-showers-heavy-solid.svg'
      break;
    case 82:
      iconSrc = 'cloud-showers-heavy-solid.svg'
      break;
    case 85:
      iconSrc = 'snowshower.svg'
      break;
    case 86:
      iconSrc = 'snowshower.svg'
      break;
    case 95:
      iconSrc = 'bolt-lightning-solid.svg'
      break;
    case 96:
      iconSrc = 'cloud-bolt-solid.svg'
      break;
    case 99:
      iconSrc = 'cloud-bolt-solid.svg'
      break;       
    default:
      iconSrc = '';
      break;
  }

  return (
    <div>
      {iconSrc ? ( 
        <img  src={iconSrc} style={{ width: '10vw', maxWidth: '50px', height: 'auto' }}/> 
      ) : (
        <div>Brak ikony dla danego kodu</div> 
      )}
    </div>
  );
};

export default WeatherIcon;
