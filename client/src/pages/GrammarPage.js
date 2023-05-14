import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { fetchOneRule } from '../http/ruleAPI';
import '../Styles/grammarPage.css'

const GrammarPage = observer(() => {
    const [rule, setRule] = useState({rule: []})
    const params = useParams()
    useEffect(() => {
        fetchOneRule(params.id).then(data => setRule(data))
    },[])
  return (
    <div>
        <div className='grammarPage_container _container'>
            <div className='grammarPage-title'>
                {rule.topic}
            </div>
            <div className='grammarPage-content'>
                {rule.content}
            </div>
        </div>
    </div>
  )
});

export default GrammarPage