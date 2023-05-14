import React from 'react'
import { observer } from 'mobx-react-lite'
import VocabularyCap from '../components/VocabularyComp/VocabularyCap'
import VocabularyList from '../components/VocabularyComp/VocabularyList'
const Vocabulary = () => {
  return (
    <div>
      <VocabularyCap/>
      <VocabularyList/>
    </div>
  )
}

export default Vocabulary