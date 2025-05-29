import axios from "axios"
import { useState } from "react"

function Weather(){

    const [city,setcity] = useState("")

    const [weather,setweather] = useState("")
    const [temp,settemp] = useState("")
    const [desc,setdesc] = useState("")


    function handleCity(evt){
        setcity(evt.target.value)
    }

    function getWeather(){
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a719be0587b0291786e6a8baddd39fb8`)

        weatherData.then(function(success){
            console.log(success.data);
            setweather(success.data.weather[0].main)
            settemp(success.data.main.temp)
            setdesc(success.data.weather[0].description)
            
        })
        .catch(function(errmsg){
            console.log("failed");
            
        })
    }

    return(
        <div className="bg-black p-20" >
            <div className="bg-green-400 p-10 rounded-md">
                <h1 className="text-2xl font-medium">Weather Report</h1>
                <p>I can give you a weather report about your city !</p>
                <input value={city} onChange={handleCity} type="text" className="mt-2 border border-black rounded-md p-1 outline-none" placeholder="Enter your City Name" /><br />
                <button onClick={getWeather} className="bg-black text-white p-2 rounded-md mt-2">Get Report</button>

                <div className="mt-2">

                    <h1><b>Weather: </b>{weather}</h1>
                    <p><b>Temperature: </b>{temp}</p>
                    <p><b>Description: </b>{desc}</p>

                </div>

            </div>
        </div>
    )
}

export default Weather