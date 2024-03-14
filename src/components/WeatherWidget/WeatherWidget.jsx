import { useState, useEffect } from "react";
import moment from "moment";
import { IconContext } from "react-icons";
import { BsGeoAltFill } from "react-icons/bs";

import {getCurrentWeather} from "../../services/apiWeather";

import { Wrapper, WeatherWrapper, Temperature, Location, ImageThumb, Text } from "./WeatherWidget.styled";

const WeatherWidget = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [data, setData] = useState({
    "coord": {
        "lon": 32.048,
        "lat": 49.4438
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 2.39,
        "feels_like": -0.66,
        "temp_min": 2.39,
        "temp_max": 2.39,
        "pressure": 1018,
        "humidity": 62,
        "sea_level": 1018,
        "grnd_level": 1005
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.04,
        "deg": 325,
        "gust": 4.06
    },
    "clouds": {
        "all": 0
    },
    "dt": 1709967878,
    "sys": {
        "country": "UA",
        "sunrise": 1709957863,
        "sunset": 1709999225
    },
    "timezone": 7200,
    "id": 710791,
    "name": "Cherkasy",
    "cod": 200
    });
    
    const currentDate = moment();
    const currentDayOfWeek = currentDate.format('ddd');
    const formattedDate = currentDate.format('D MMM YYYY');
  
    useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
    }, []);

    useEffect(() => {
      if (!latitude && !longitude) {
          return
      }
        getCurrentWeather(latitude, longitude).then(response=>setData(response))
    }, [latitude, longitude])
  
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  
  return (
    <Wrapper>
      <WeatherWrapper>
        <Temperature>{Math.round(data.main.temp)}°</Temperature>
        <div>
          <Text>{data.weather[0].main}</Text>
          <Location>
            <IconContext.Provider value={{ size: '27px', color: '#ffffff' }}>
              <BsGeoAltFill />
            </IconContext.Provider>                    
            {data.name}
          </Location>
        </div>
      </WeatherWrapper>
      <ImageThumb>
        <img src={iconUrl} alt={data.weather[0].main} />
      </ImageThumb>              
      <div>
        <Text>{currentDayOfWeek}</Text>
        <Text>{formattedDate}</Text>
      </div>
    </Wrapper>
  )
}

export default WeatherWidget