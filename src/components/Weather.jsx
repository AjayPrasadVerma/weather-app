import { useState, useEffect } from "react";
import { useContext } from "react";
import WeatherItem from "./WeatherItem";
import classes from "./Weather.module.css";
import SearchContext from "../context/search-context";

function Weather() {
  const { cityValue } = useContext(SearchContext);
  const [weatherDetails, setWeatherDetails] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async (city) => {
    setIsLoading(true);
    setError(null);

    try {
      const apiURI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0ad5c8bef605dd16bab22b064bc9b0f5&units=metric`;

      const response = await fetch(apiURI);

      if (!response.ok) {
        throw new Error("Something went wrong..!");
      } else {
        const responseData = await response.json();

        const data = {
          city: responseData.name,
          temp: responseData.main.temp,
          icon: responseData.weather[0].icon,
        };

        console.log(responseData);
        setWeatherDetails(data);
      }
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchWeather(cityValue);
  }, [cityValue]);

  let content = <p>No weather found.</p>;

  if (cityValue.trim() === "") {
    content = <p>Please search your city.</p>;
  }

  if (cityValue.trim() !== "") {
    content = (
      <WeatherItem
        image="https://th.bing.com/th/id/OIP.kkXjS8PKda1nAGSpf60B0wAAAA?pid=ImgDet&rs=1"
        city={weatherDetails.city}
        temp={weatherDetails.temp}
        icon={weatherDetails.icon}
      />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div className={classes.list}>
      <section>{content}</section>
    </div>
  );
}

export default Weather;
