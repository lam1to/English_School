import GrammarListOne from './GrammarListOne'
import { observer } from 'mobx-react-lite'
import RuleListOne from './RuleListOne'
import React from 'react'

const GrammarBlock = observer(({grammarOne, ruleMas}) => {
  return (
    <div>
        <GrammarListOne grammar={grammarOne}/>
            {ruleMas?.map((ruleOne, j) => 
                grammarOne.id === ruleOne.grammarId && <RuleListOne key={j} rule = {ruleOne}/>
            )}
    </div>
  )
});

export default GrammarBlock