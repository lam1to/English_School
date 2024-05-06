import React, { useState, useContext, useCallback, useEffect } from 'react';
import TestSelector from '../components/TestSelector';
import Test from '../components/Test';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { FormProvider, useForm } from 'react-hook-form';
import { ProfileConstants } from '../components/Profile/Constants';
import '../Styles/exercises.css';
const Exercises = observer(() => {
  const form = useForm({
    defaultValues: {
      currLevel: ProfileConstants.ENGLISH_LEVEL[0],
      currTopic: ProfileConstants.TOPIC[0],
    },
    mode: 'onChange',
  });
  const level = form.watch('currLevel');
  const topic = form.watch('currTopic');
  // console.log()
  useEffect(() => {
    onChange();
  });
  const onChange = useCallback(() => {
    console.log('level');
  }, [level, topic]);
  return (
    <div className="exersises-container">
      <FormProvider {...form}>
        <TestSelector form={form} />
        <Test level={level} topic={topic} />
      </FormProvider>
    </div>
  );
});

export default Exercises;
