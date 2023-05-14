import { observer } from 'mobx-react-lite'
import React from 'react'
import '../../Styles/vocabularyCap.css'

const VocabularyCap = () => {
  return (
    <div className='vocabularyCap_container _container'>
        <div className='vocabularyCap-title'> 
            Topics - Топики
        </div>
        <div className='vocabularyCap-description'>
            Здесь собрана коллекция топиков и сочинений по английскому языку (коротких <br/> тематических рассказов).
        </div>
        <div className='vocabularyCap-sub_title'>
          Сочинения и топики по темам:
        </div>
    </div>
  )
}

export default VocabularyCap