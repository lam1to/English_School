import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '..';
import { finishTest, getOneTestWithData } from '../http/testAPI';
import { observer } from 'mobx-react-lite';

export const useTestLogic = () => {
  const { id } = useParams();
  const { testStore } = useContext(Context);
  const { activeTest } = testStore;
  // const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const sizeTest = activeTest?.questions?.length;
  useEffect(() => {
    if (!id) return;
    const fetch = async () => {
      setLoading(true);
      await getOneTestWithData(id)
        .then((data) => {
          if (data) {
            testStore.setActiveTest(data);
          }
        })
        .finally(() => setLoading(false));
    };
    if (Object.keys(activeTest).length !== 0 && activeTest.id === +id) {
      setLoading(true);
      const currentS = activeTest.questions.findIndex((question) => !question.answerId);
      setCurrentStep(currentS);
      setLoading(false);
    } else {
      fetch();
    }
  }, [id]);
  const confirmTest = async () => {
    const payload = {
      testId: +id,
      questionAttempts: activeTest.questions.map((oneItem) => ({
        questionId: oneItem.id,
        answerId: oneItem.answerId,
      })),
    };
    setLoading(true);
    await finishTest(payload)
      .then(({ data }) => {
        console.log('data = ', data);
        testStore.setResultTest(data);
      })
      .finally(() => setLoading(false));
  };
  const onAnswered = (answear) => {
    const questions = [...activeTest.questions].map((oneItem, i) => {
      if (i === currentStep) oneItem = { ...oneItem, answerId: answear.id };
      return oneItem;
    });
    testStore.setActiveTest({ ...activeTest, questions: questions });
    if (currentStep < sizeTest) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  useEffect(() => {
    if (!sizeTest) return;
    if (currentStep === sizeTest) {
      confirmTest();
    }
  }, [currentStep]);
  useEffect(() => {
    return () => {
      if (currentStep === sizeTest) {
        testStore.setActiveTest({});
        testStore.setResultTest({});
      }
    };
  }, [currentStep]);
  return { onAnswered, loading, sizeTest, activeTest, currentStep };
};
