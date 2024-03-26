import { useState } from 'react'
import './App.css'
import { Button, Title } from './components/imports'


function App() {

  return (
    <div id='Soon'>
      <div className="bgd"></div>
      <div className='back c1'></div>
      <div className='back c2'></div>
      <div className='back c3'></div>
      <div className='back c4'></div>
      <Title className='t1' content="ByteVar"/>
      <Title className='t2' content='¡¡We Are Comming Soon!!' fst />
    </div>
  )
}

export default App
