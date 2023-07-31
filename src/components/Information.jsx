import { Box,Typography,styled } from '@mui/material'
import React from 'react'
import { LocationOn,SettingsBrightness,Opacity,Brightness5,Brightness6,Dehaze,Cloud } from '@mui/icons-material'
import { IconContext } from 'react-icons';
import { DateTime } from "luxon";
import { WiCloud, WiDayCloudy,WiDaySunny,WiCloudy,WiShowers,WiRain,WiThunderstorm,WiSnow,WiFog,WiNightClear,WiNightAltCloudy,WiNightAltShowers,WiNightRain,WiNightAltThunderstorm,WiNightAltSnow,WiNightFog } from 'react-icons/wi';

const Row = styled(Typography)`
  padding: 10px;
  font-size: 20px;
  letter-spacing: 2px;
  color: white;
  display: flex;
  align-items: center;
  border-radius: 20px;

  & > svg {
    margin-right: 10px;
    color: #de4c1f;
  }

  &::placeholder {
    color: #de4c1f;
  }

  &:hover {
    & > svg{
        color: white
    }
    background-color: #de4c1f;
  }
`;
const Error = styled(Typography)({
    color: 'red',
    padding: 100,
    margin: 60
})
const Base = styled(Box)({
    padding: '20px',
    margin: '50px',
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr 1fr', 
    gridTemplateColumns: '1fr 1fr', 
    gap: '20px', 
})
const ParentBase = styled(Box)({
    backgroundColor:'black',
    margin:'200px 60px',
    height:'60%',
    borderRadius: 20,
})
function Information({result}) {
    if (!result || Object.keys(result).length === 0) {
        return <Error>PLEASE ENTER THE VALUES TO CHECK WEATHER</Error>;
    }
    
    const weatherIconMap = {
        '01d': WiDaySunny,
        '01n': WiNightClear,
        '02d': WiDayCloudy,
        '02n': WiNightAltCloudy,
        '03d': WiCloud,
        '03n': WiNightAltCloudy,
        '04d': WiCloudy,
        '04n': WiNightAltCloudy,
        '09d': WiShowers,
        '09n': WiNightAltShowers,
        '10d': WiRain,
        '10n': WiNightRain,
        '11d': WiThunderstorm,
        '11n': WiNightAltThunderstorm,
        '13d': WiSnow,
        '13n': WiNightAltSnow,
        '50d': WiFog,
        '50n': WiNightFog,
      }; 
    const iconCode = result.weather[0]?.icon;
    const WeatherIcon = iconCode ? weatherIconMap[iconCode] || WiDayCloudy : WiDayCloudy;

    const timezoneOffset = result.timezone / 3600; 

    const sunriseUTC = DateTime.fromSeconds(result.sys.sunrise).toUTC().plus({ hours: timezoneOffset });
    const sunsetUTC = DateTime.fromSeconds(result.sys.sunset).toUTC().plus({ hours: timezoneOffset });

    const sunriseTime = sunriseUTC.toFormat("hh:mm a"); 
    const sunsetTime = sunsetUTC.toFormat("hh:mm a");

  return (
    result && Object.keys(result).length > 0 ?
    <ParentBase>
        <Base>
        <Row><LocationOn />Location: {result.name},{result.sys.country}</Row>
        <Row><SettingsBrightness />Temperature: {result.main.temp}°C</Row>
        <Row><SettingsBrightness />Temperature: {result.main.feels_like}°C</Row>
        <Row><Opacity />Humidity: {result.main.humidity} </Row>
        <Row><Brightness5 />SunRise: {sunriseTime} </Row>
        <Row><Brightness6 />SunSet: {sunsetTime} </Row>
        <Row><Dehaze/>Description: {result.weather[0].main}</Row>
        <Row><Cloud/>WindSpeed: {result.wind.speed}mph</Row>
        </Base>
        <Box>
         <IconContext.Provider value={{ size: '4em', color: 'white' }}>
            <WeatherIcon />
         </IconContext.Provider>
        </Box>
    </ParentBase>
    : <Error>PLEASE ENTER THE VALUES TO CHECK WEATHER</Error>
  )

}

export default Information