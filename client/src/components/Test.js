import React, { useContext, useEffect, useState } from 'react'
import { Context } from '..';
import '../Styles/test.css'
import { observer } from 'mobx-react-lite'
import { fetchTest } from '../http/testAPI';
import TestOne from './TestOne';

const Test = observer(({level, topic}) => {
    const {test} = useContext(Context)
    const [filteredTests, setFilteredTests] = useState([]);

    useEffect(() => {
        fetchTest().then(data =>{
            test.setTest(data.rows);
        })
        setFilteredTests(getFilteredTests());
    },[])

    useEffect(() => {
        setFilteredTests(getFilteredTests());
    }, [level, topic])
    
    const getFilteredTests = () => {
        return test.tests?.filter(testToCheck => {
            return testToCheck.sTopic == topic && testToCheck.level == level
        })
    }
  
    return (
    <div className="choice_test">
        <div className="choice_test-container _container">
            <div className="choice_test-list">
                {filteredTests.map((testOne, i) => ( 
                    <TestOne key = {testOne.id} test = {testOne} i = {i}/>
                    )
                )}
            </div>
        </div>
    </div>
  )
});

export default Test

