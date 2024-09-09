**Weather Forecast Web App**

This Weather Forecast Web App allows users to search for any location and retrieve real-time weather information.
By entering a city name, postal code, or coordinates, users can get the current weather conditions, including temperature, humidity and wind speed.

**Key Features:**

Search by Location: Users can search weather by entering a location (city, postal code, etc.).

Real-time Weather Data: Displays live weather details including temperature, weather description, humidity, pressure, and wind speed.

Feels Like Temperature: Includes information about how the weather feels.

Responsive Interface: Works seamlessly on different devices and screen sizes.

**Technologies Used:**

Node.js and Express.js: Backend to handle API requests and serve weather data.

HTML, CSS, JavaScript: For a responsive front-end interface.

Weather API: Uses external weather APIs (like WeatherStack) to fetch live weather data.

Mapbox API: For geocoding user input into latitude and longitude coordinates.

**How It Works:**

The user enters a location into the search field (e.g., city name or postal code).

The app fetches the latitude and longitude using the Mapbox API.

Using the coordinates, the app queries a weather API (like WeatherStack) to retrieve real-time weather information.

The weather data, along with a descriptive icon, is displayed in the user interface.

**Example Use Case:**

If a user searches for "Hyderabad" the app will:

Fetch the latitude and longitude of Hyderabad.

Retrieve the current weather conditions, including temperature, description and humidity.

Display "In Hyderabad, the weather is Patchy rain nearby. It is currently 26°C. It feels like 29°C and humidity is 79,"
