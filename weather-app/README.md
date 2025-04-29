# Weather App

A simple, elegant weather application that allows users to check current weather conditions for any city around the world. The app displays temperature, humidity, wind speed, and weather conditions with appropriate icons.

![Weather App Screenshot](/images/app-complete.pdf "Weather App Screenshot")

## Features

- Search for weather by city name
- Display current temperature in Fahrenheit
- Show humidity percentage
- Display wind speed in mph
- Visual weather condition icons
- Responsive design that works on desktop and mobile devices
- Error handling for invalid city names

## Installation

1. Clone this repository or download the ZIP file:

```bash
git clone https://github.com/yourusername/weather-app.git
```

2. Navigate to the project directory:

```bash
cd weather-app
```

3. Open `index.html` in your web browser to use the application.

## Getting Your Own API Key

This application uses the [WeatherAPI.com](https://www.weatherapi.com/) service. To use the app with your own API key:

1. Visit [WeatherAPI.com](https://www.weatherapi.com/) and sign up for a free account.

2. After signing up and verifying your email, log in to your dashboard.

3. Your API key will be displayed on your dashboard. If not, navigate to the "API Keys" section.

4. Copy your API key.

5. Open the `script.js` file in the project and replace the existing API key with your own:

   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

> **Note:** The free tier of WeatherAPI.com allows up to 1,000,000 calls per month, which is more than sufficient for personal use.

## How to Use the App

1. Open the application in your web browser.

2. In the search box, type the name of a city you want to check the weather for.

3. Click the search button (magnifying glass icon).

4. The app will display:
   - Current temperature in Fahrenheit
   - City name
   - Humidity percentage
   - Wind speed in mph
   - A weather icon representing the current conditions

5. If you enter an invalid city name, an error message will be displayed.

## API Response Format

The app uses the following data from the WeatherAPI.com response:

- `data.location.name` - City name
- `data.current.temp_f` - Temperature in Fahrenheit
- `data.current.humidity` - Humidity percentage
- `data.current.wind_mph` - Wind speed in miles per hour
- `data.current.condition.text` - Weather condition description

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- WeatherAPI.com API

## File Structure

```text
weather-app/
│
├── index.html          # Main HTML file
├── style.css           # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # This documentation file
│
└── images/             # Weather icons
    ├── clear.png
    ├── clouds.png
    ├── drizzle.png
    ├── humidity.png
    ├── mist.png
    ├── rain.png
    ├── search.png
    ├── snow.png
    └── wind.png
```

## Customization

You can customize the app by:

- Modifying the CSS in `style.css` to change colors, fonts, or layout
- Adding additional weather conditions in the JavaScript file
- Extending the app to show forecast data (requires API plan that supports forecasts)

## Troubleshooting

If you encounter issues:

1. **Weather not displaying**: Check your API key and ensure it's correctly entered in the script.js file.

2. **CORS errors**: If testing locally, you might encounter CORS issues. Consider using a CORS proxy or testing on a local server.

3. **API limits**: The free tier has usage limits. Check your WeatherAPI.com dashboard to ensure you haven't exceeded them.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Weather icons provided by [WeatherAPI.com](https://www.weatherapi.com/)
- Font used: Poppins from Google Fonts
