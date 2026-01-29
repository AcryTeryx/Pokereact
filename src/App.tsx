// import { useState } from 'react'
// import './App.css'
import { Button } from '@mui/material'
export default function App() {
  return (
    <div className='min-h-screen flex flex-col item-center text-center justify-center'>
      <h1 className="text-3xl font-bold">
        Pokereact</h1>
      <Button variant="contained" color='primary' className='self-center' href='/pokedex'>
        Enter the V0ID
      </Button>

      {/* <TrainerForm/> */}

      {/* </TrainerForm>       */}
    </div>
  )
}