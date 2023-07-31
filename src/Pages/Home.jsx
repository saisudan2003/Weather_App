import React from 'react'
import { Box,styled, width } from '@mui/system'
import sunset from '/Users/saisudansv/Desktop/weatherfinal2/src/Assets/images/bg.jpg'
import Form from '../components/Form'
import Information from '../components/Information'
import { useState } from 'react'

const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%'
})

const Image = styled(Box)({
    backgroundImage: `url(${sunset})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px'
})

function Home() {
    const [result,setResult] = useState({})


  return (
    <Component>
        <Image></Image>
        <Box style={{width: '73%',height: '80%',backgroundColor: 'black',borderRadius: '0 20px 20px 0'}}>
            <Form setResult={setResult}/>
            <Information result={result}/>
        </Box>
    </Component>
    
  )
}

export default Home