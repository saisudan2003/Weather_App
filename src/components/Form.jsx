import React from 'react'
import { Box,InputBase,Button,styled } from '@mui/material'
import { useState } from 'react'
import { getWeather } from '../services/Api'



const Container = styled(Box)({
    background: '#0f0401',
    padding: '10px',
    borderRadius: '0 20px 0 0',
    zIndex: 1
})

const Input = styled(InputBase)`
  color: #f5f1f0;
  margin-right: 20px;
  font-size: 18px;
  
  &::placeholder {
    color: white;
  }
`;

const GetButton = styled(Button)`
  background-color: black;
  color: white;

  
  &:hover {
    background-color: #de4c1f;
    /* Add other hover styles as needed */
  }
`;


const Form = ({setResult}) => {

    const [data,setData] = useState({city: '', country: ''})

    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const getWeatherInfo = async () => {
       let response = await getWeather(data.city,data.country)
       setResult(response);
    }


  return (
    <Container style={{display: 'flex',alignItems: 'center', justifyContent: 'space-between'}}>
        <Input
        placeholder='City'
        onChange={(e)=>handleChange(e)}
        name='city'/>
        <Input
        placeholder='Country'
        onChange={(e)=>handleChange(e)}
        name='country'/>
        <GetButton
        variant='contained'
        onClick={getWeatherInfo}>get weather</GetButton>

    </Container>
  )
}

export default Form