import React from 'react'
import TestSelector from '../components/TestSelector'
import Test from '../components/Test'
import { observer } from 'mobx-react-lite'

const Exercises = observer(() => {
  return (
    <div>
      <TestSelector/>
      <Test/>
    </div>
  )
});

export default Exercises