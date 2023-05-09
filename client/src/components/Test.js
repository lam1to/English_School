import React, { useContext, useEffect } from 'react'
import { Context } from '..';
import '../Styles/test.css'
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite'
import { fetchTest } from '../http/testAPI';
import TestOne from './TestOne'

const Test = () => {
    const {test} = useContext(Context)
    useEffect(() => {
        fetchTest().then(data => test.setTest(data.rows))
    },[])
  return (
    <div className="choice_test">
        <div className="choice_test-container _container">
            <div className="choice_test-list">
                {test.tests?.map((testOne, i) => 
                    <TestOne key = {testOne.id} test = {testOne} i = {i}/> 
                )}
            </div>
        </div>
    </div>
  )
}

export default Test


