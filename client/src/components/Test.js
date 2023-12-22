import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import '../Styles/test.css';
import { observer } from 'mobx-react-lite';
import { fetchTest } from '../http/testAPI';
import TestOne from './TestOne';

const Test = observer(({ level, topic }) => {
  const [filteredTests, setFilteredTests] = useState([]);
  const [test, setTest] = useState([]);
  useEffect(() => {
    fetchTest().then((data) => {
      setTest(data.rows);
    });
    setFilteredTests(getFilteredTests());
  }, []);

  useEffect(() => {
    setFilteredTests(getFilteredTests());
  }, [level, topic]);
  const getFilteredTests = () => {
    return test?.filter((testToCheck) => {
      return (
        testToCheck.sTopic == topic.label && testToCheck.level == level.value
      );
    });
  };

  return (
    <div className="choice_test">
      <div className="choice_test-container _container">
        <div className="test-row-card">
          {filteredTests.map((testOne, i) => (
            <TestOne key={testOne.id} test={testOne} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Test;
