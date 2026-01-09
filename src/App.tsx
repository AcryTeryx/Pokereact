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

      <h1 className="text-3xl font-bold text-white">
        Pokereact</h1>
      <Button variant="contained"> Enter the V0ID </Button>

      {/* <TrainerForm/> */}

      {/* </TrainerForm>       */}
    </>
  )
}