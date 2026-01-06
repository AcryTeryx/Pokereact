import { useState } from 'react'
import './App.css'
import TrainerForm from './component/TrainerForm'



export default function App() {
  const [trainerList, setTrainerList] = useState([""])
  return (
    <>

    <h1> Hello world !</h1>
    <TrainerForm>
      
    </TrainerForm>      
    </>
  )
}
