import React from 'react'
import '../../Styles/grammarCap.css'
import { observer } from 'mobx-react-lite'

const GrammarCap = observer(() => {
  return (
    <div className='_container'>
      <div className='grammarCap_container'>
        <div className='grammarCap-title'> 
            Грамматика английского языка
        </div>
        <div className='grammarCap-description'>
        Онлайн справочник грамматики английского языка с изложением особенностей <br/> употребления частей речи, а также построения английских предложений.
        </div>
      </div>
  </div>
  )
});

export default GrammarCap