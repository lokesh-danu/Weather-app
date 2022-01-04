import { useState, useEffect } from "react";
import Weather from './Weather';
const Home = () => {
    const [location, setLocation] = useState("london");
    // const [takeinput, setTakeinput] = useState("Enter here");
    const [data, setData] = useState(null);
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f66c0adfdefec0b278a608ed542c3264&units=metric`;
    const [ispending, setIspending] = useState(false);
    const [error, setError] = useState(null);
    const msg="pending";
    const search = () => {
        setIspending(true);
        console.log(`search ${location}`);
        fetch(url).then(res => {
            console.log("fecth");
            if (!res.ok) {
                throw Error('unable to fetch right now');
            }
            else {
                return res.json();
            }
        }).then(data => {
            console.log(data);
            setData(data);
            setIspending(false);
            setError(null);
        }).catch(err => {
            setError(err);
            setIspending(false)
            setData(null);
            console.log(err);
        })
    }


    return (
        <div className="home">
            <div className="searchbar">
                <input className="input" type="text"
                    value={location}
                    onChange={e => { setLocation(e.target.value) }}
                />
                {ispending && <button disabled className="btn">Searching..</button> }
                {!ispending&&<button className="btn" onClick={search}>Search</button>}
            </div>
            {error && <div className="error"><h1>Invalid Name</h1></div> }
            {data && <Weather data={data}></Weather>}
        </div>
    );
}

export default Home;