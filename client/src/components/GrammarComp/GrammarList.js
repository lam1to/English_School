import React, {useContext, useEffect} from 'react'
import { Context } from '../..'
import { fetchGrammar } from '../../http/grammarAPI'
import { fetchRule } from '../../http/ruleAPI'
import { observer } from 'mobx-react-lite'
import GrammarBlock from './GrammarBlock'

const GrammarList = observer(() => {
const {grammar} = useContext(Context)
  useEffect(() => {
    fetchGrammar().then(data => {grammar.setGrammar(data)})
    fetchRule().then(data => {grammar.setRule(data)})

  },[])

  return (
    <div className='grammar-list_container _container'>
        <div className='grammar-list_row'>
          {grammar.grammars?.map((grammarOne, i) => 
                <GrammarBlock key={i}  grammarOne = {grammarOne} ruleMas = {grammar.rules}/>
                )}
        </div>
    </div>
  )
});

export default GrammarList