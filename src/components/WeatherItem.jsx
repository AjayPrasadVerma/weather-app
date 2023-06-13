import LocationOnIcon from "@mui/icons-material/LocationOn";
import Card from "./ui/Card";
import classes from "./WeatherItem.module.css";

function WeatherItem(props) {
  return (
    <div className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.city} />
        </div>
        <div className={classes.content}>
          <h3>Today</h3>
          <LocationOnIcon>
            <h1>{props.city}</h1>
          </LocationOnIcon>
          <h3>{props.temp} &deg;C</h3>
          <img
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt="icon"
          />
        </div>
      </Card>
    </div>
  );
}

export default WeatherItem;
