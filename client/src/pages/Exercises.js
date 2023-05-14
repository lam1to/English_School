import React, {useState, useContext} from 'react'
import TestSelector from '../components/TestSelector'
import Test from '../components/Test'
import { observer } from 'mobx-react-lite'
import { Context } from '..'


const Exercises = observer(() => {
  const {test} = useContext(Context)
  const [currLevel, setCurrLevel] = useState(test.levelFlags);
  const [currTopic, setCurrTopic] = useState(test.topicFlags);

  return (
    <div>
      <TestSelector setLevel={setCurrLevel} setTopic={setCurrTopic}/>
      <Test level={currLevel} topic={currTopic} />
    </div>
  )
});

export default Exercises