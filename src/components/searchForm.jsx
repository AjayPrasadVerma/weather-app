import { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./ui/Card";
import classes from "./SearchForm.module.css";
import SearchContext from "../context/search-context";

function SearchForm() {
  const cityInputRef = useRef();
  const [isEmpty, setIsEmpty] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  const navigate = useNavigate();

  const { setCity } = useContext(SearchContext);

  function submitHandler(event) {
    event.preventDefault();
    const enteredCity = cityInputRef.current.value;
    setIsTouched(true);

    if (enteredCity.trim() !== "") {
      setIsEmpty(false);
    }
    setCity(enteredCity);

    navigate("/");
  }

  const isInvalid = isEmpty && isTouched;

  const enteredCityClass = isInvalid ? classes.invalid : " ";

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={`${classes.control} ${enteredCityClass}`}>
          <label htmlFor="title">Please enter your city</label>
          <input type="text" id="title" ref={cityInputRef} />
          {isInvalid ? (
            <p className={classes.errorText}>Please enter city name</p>
          ) : null}
        </div>
        <div className={classes.actions}>
          <button>Search</button>
        </div>
      </form>
    </Card>
  );
}

export default SearchForm;
