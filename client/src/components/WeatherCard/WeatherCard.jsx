import styles from './WeatherCard.module.css';
import cn from 'classnames';

const WeatherCard = ({ weatherData }) => {

  return (
    <div className={styles.weatherCard}>
      <h1 className={styles.header}>{weatherData.location}</h1>
      <img style={{ width: '100px', height: '100px' }} src={`https://openweathermap.org/img/wn/${weatherData.icon}.png`} alt="" />

      <h1 className={styles.temp}>{weatherData.temparature}</h1>
      <p className={styles.text}>{weatherData.description}</p>
      <div className={styles.info}>
        <div>
          <p className={cn(styles.text, styles.humidity)} >{weatherData.humidity} %</p>
          <p className={styles.text}>Humidity</p>
        </div>
        <div>
          <p className={cn(styles.text, styles.windSpeed)}>{weatherData.windSpeed} km/h</p>
          <p className={styles.text}>Wind speed</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;