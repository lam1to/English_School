import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import '../../Styles/vocabularyListOne.css'
import { VOCABULARY_ROUTE } from '../../utils/consts';
import {useNavigate} from 'react-router-dom'

const VocabularyListOne = observer(({vocabulary}) => {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate(VOCABULARY_ROUTE + '/' + vocabulary.id)} className='vocabularyListOne_block'>
        <Link className='vocabularyListOne-block_img'>
            <img src={process.env.REACT_APP_API_URL + vocabulary.img}></img>
        </Link>
        <div className='vocabularyListOne-text_container'>
            <ul >
                <li className='vocabularyListOne-text_container-li'>
                    <Link>
                        <div className='vocabularyListOne-text_container-topic'>
                            {vocabulary.topic}
                        </div>
                    </Link>
                    <div className='vocabularyListOne-text_container-description'>
                        {vocabulary.description}
                    </div>
                </li>

            </ul>
        </div>
    </div>
  )
});

export default VocabularyListOne