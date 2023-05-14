import React from 'react'
import '../../Styles/ruleListOne.css'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { GRAMMAR_ROUTE } from '../../utils/consts'

const RuleListOne = ({rule}) => {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate(GRAMMAR_ROUTE + '/' + rule.id)} className='ruleListOne_container'>
        <Link className='ruleListOne_link'>
            {rule.topic}
        </Link>
    </div>
  )
}

export default RuleListOne