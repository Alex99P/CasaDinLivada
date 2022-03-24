import React from 'react'
import img from '../../imagini/imaginea1.jpg'
import Menu from '../Menu'
import './Home.scss'





const Home=()=>{

  return <>
      <div className='containerHome' >
    <img className='imgHome' src={img}/>
    <Menu/>
    </div>
  </>
 
}
export default Home;