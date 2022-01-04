import { useState,useEffect } from "react";
const Weather = (props) => {
    const data=props.data;
    // console.log(data);
    const [temp, setTemp] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [feelslike, setFeelslike] = useState(null);
    const [wind, setWind] = useState(null);
    const [maxtemp, setMaxtemp] = useState(null);
    const [mintemp, setMintemp] = useState(null);
    const [pressure, setPressure] = useState(null);
    useEffect(() => {
        setTemp(data.main.temp);
        setHumidity(data.main.humidity);
        setFeelslike(data.main.feels_like);
        setWind(data.wind.speed);
        setMaxtemp(data.main.temp_max);
        setMintemp(data.main.temp_min);
        setPressure(data.main.pressure);
    }, [data])
    return ( 
        <div className="weather">
            <div className="card temp">
                <p>Temperature : {temp}</p>
                <p>Max : {maxtemp}</p>
                <p>Min : {mintemp}</p>
                <p>Feels Like : {feelslike}</p>
            </div>
            <div className="card wind">
                <p>Wind speed : {wind}</p>
            </div>
            <div className="card">
                <p>Humidity: {humidity}</p>
                <p>Pressure:{pressure}</p>
            </div>

        </div>
     );
}
 
export default Weather;