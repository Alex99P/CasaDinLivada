import React, {useEffect} from 'react'
import axios from 'axios';
import './Cazare.scss'


const BASE_URL = 'https://api.exchangeratesapi.io/latest';




const Cazare = () => {
//   useEffect(() => {
    
//     const access_key ='JCKI0X2eWh31rmxQqIDAmcy2067u5AVA'
//  axios.get('https://api.exchangeratesapi.io/latest?acces_key=JCKI0X2eWh31rmxQqIDAmcy2067u5AVA')
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
    
    
//   }, []);
// var myHeaders = new Headers();
// myHeaders.append("apikey", "JCKI0X2eWh31rmxQqIDAmcy2067u5AVA");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/fixer/convert?to={EUR}&from={USD}&amount={100}", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


//   useEffect(() => {
//     axios.get('http://data.fixer.io/api/latest?access_key=JCKI0X2eWh31rmxQqIDAmcy2067u5AVA')
//       .then(response => {
//         // setRates(response.data.rates);
//         console.log("Aici",response);
        
//       })
//   }, []);

// const options = {
//   method: 'GET',
//   url: 'https://currency-converter5.p.rapidapi.com/currency/convert',
//   params: {format: 'json', from: 'AUD', to: 'CAD', amount: '1'},
//   headers: {
//     'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
//     'X-RapidAPI-Key': '1f077b2e37msh9fb099b6627ecd2p18ec42jsn819e59526891'
//   }
// };

  
//   axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });

  
  return (
    <>
 
    </>
  )
}

export default Cazare