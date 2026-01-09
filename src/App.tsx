import { useState } from 'react'
import './App.css'
import TrainerForm from './component/TrainerForm'
import { Button } from '@mui/material'


export default function App() {
  const [trainerList, setTrainerList] = useState([""])
  return (
    <>
    <Button variant="contained"> G </Button>
    <h1> Hello world !</h1>
    <TrainerForm>
      
    </TrainerForm>      
    </>
  )
}
