import React from 'react'
import './Cazare.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify = () =>toast.error('Succes', {
  position: "top-center",
  autoClose: 1500,
  pauseOnHover: false,
  });
  // const notify = () =>toast.success('Succes', {
  //   position: "top-center",
  //   autoClose: 1500,
  //   pauseOnHover: false,
  //   });

const Cazare = () => {
  return (
    <>
  <button onClick={notify}>Notify!</button>
        <ToastContainer
        />
    </>
  )
}

export default Cazare