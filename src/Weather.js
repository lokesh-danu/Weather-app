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
        console.log(data);
        var temp=Math.trunc(data.main.temp-273.15);
        var wind=data.wind.speed;
        var hum=data.main.humidity;
        console.log(temp);
        setTemp(temp);
        setHumidity(hum);
        setFeelslike(Math.trunc(data.main.feels_like-273.15));
        setWind(wind);
        setMaxtemp(Math.trunc(data.main.temp_max-273.15));
        setMintemp(Math.trunc(data.main.temp_min-273.15));
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