import React from 'react'
import CongratulationImg from '../img/Congratulation.png'
import '../Styles/congratulation.css'
const Congratulation = () => {
  return (
    <div>
      <div className='congratulation_container _container'>
          <div className='congratulation-title'>
            Great, the test is passed!
          </div>
          <div className='congratulation-img'> 
                <img src= {CongratulationImg} />
          </div>
      </div>

    </div>
  )
}

export default Congratulation

