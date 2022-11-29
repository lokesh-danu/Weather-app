import { useState ,useEffect } from "react";
import Weather from './Weather';
import axios from "axios";
const Home = () => {
    const [country, setCountry] = useState([]);
    const cntryUrl="https://countriesnow.space/api/v0.1/countries";
    const [location, setLocation] = useState("Afghanistan");
    // const [takeinput, setTakeinput] = useState("Enter here");
    const [data, setData] = useState(null);
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=794ee95e63c5a32aaf88cd813fa2e425`;
    const [ispending, setIspending] = useState(false);
    const [error, setError] = useState(null);
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
    useEffect(() => {
    
      axios.get(cntryUrl).then( res=>{
        console.log(res.data.data);
        setCountry(res.data.data);
        
      })
    }, [])
    console.log(country);
    
    return (
        <div className="home">
            <div className="searchbar">
                <select onChange={ e=>{
                    setLocation(e.target.value);
                }}
                className="select"
                >
                    {
                        country.map( el=>{
                            return (
                                <>
                                <option value={el.country} key ={el.county} className="option"> {el.country} </option>
                                </>
                            )
                        })
                    }
                </select>
                {/* {location}; */}
                {ispending && <button disabled className="btn">Searching..</button> }
                {!ispending&&<button className="btn" onClick={search}>Search</button>}
            </div>
            {error && <div className="error"><h1>Invalid Name</h1></div> }
            {data && <Weather data={data}></Weather>}
        </div>
    );
}

export default Home;