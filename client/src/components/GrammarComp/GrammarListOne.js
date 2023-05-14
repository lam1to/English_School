import React from 'react'
import '../../Styles/grammarListOne.css'

const GrammarListOne = ({grammar}) => {
  return (
    <div className='grammarListOne_container'>
        {grammar.topic}
    </div>
  )
}

export default GrammarListOne