import React, { useContext,useEffect, useState} from 'react'
import { Context } from '../..';
import { fetchVocabulary } from '../../http/vocabularyAPI';
import VocabularyListOne from './VocabularyListOne';
import { observer } from 'mobx-react-lite';
import '../../Styles/vocabularyList.css'


const VocabularyList = observer(() => {
  const {vocabulary} = useContext(Context)
  useEffect(() => {
    fetchVocabulary().then(data => {vocabulary.setVocabulary(data)})
  },[])
  
  return (
    <div className='vocabulart-list_container _container'>
        <div className='vocabulary-list_row'>
        {vocabulary.vocabularys?.map((vocabularyOne, i) => 
                    <VocabularyListOne key={vocabularyOne.id} vocabulary={vocabularyOne}/>
                )}
        </div>
    </div>
  )
});

export default VocabularyList