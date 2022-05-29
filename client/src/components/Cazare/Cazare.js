import React, {useEffect} from 'react'
import axios from 'axios';
import './Cazare.scss'







const Cazare = () => {
  const getConversions = async () => {
    // get data form BNR XML file
    const result = await axios.get('https://www.bnr.ro/nbrfxrates.xml',{mode: 'cors'})
    console.log(result);
    
    // Convert XML to JSON 

    // Save to redux/context and use all over the app
    
}
getConversions();
console.log("first");

  return (
    <>
 
    </>
  )
}

export default Cazare