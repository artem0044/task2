import express from 'express';
import axios from 'axios';
import cors from 'cors'

const port = 3001;
const app = express();

app.use(express.json());
app.use(cors())

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

app.get('/weather', async (req, res) => {
	const { city } = req.query;
	const APi_KEY = '36f9e7620e64cf2a7328f3906fe283ee';
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APi_KEY}&units=metric`;

	try {
		const { data: weatherData } = await axios.get(url);
		const [{ icon, description }] = weatherData.weather

		const responseBody = {
			location: weatherData.name,
			temparature: weatherData.main.temp,
			humidity: weatherData.main.humidity,
			windSpeed: weatherData.wind.speed,
			icon,
			description,
			weather: weatherData.weather
		}

		res.json(responseBody);
	} catch (error) {
		res.status(error.response.status).json({ message: error.response.data.message });
	}
});
