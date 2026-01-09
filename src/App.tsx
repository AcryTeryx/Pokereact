import { useState } from 'react'
import './App.css'
import TrainerForm from './component/TrainerForm'
import { Button } from '@mui/material'
import BasicMenu from './component/Menu'

export default function App() {
  const [trainerList, setTrainerList] = useState([""])
  return (
    <>
    <BasicMenu />
    <Button variant="contained"> G </Button>
    <h1> Pokereact</h1>
    <h1 className="text-3xl font-bold text-white">
    Hello world!
  </h1>

    {/* <TrainerForm/> */}
      
    {/* </TrainerForm>       */}
    </>
  )
}
