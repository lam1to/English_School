import Loader from '../components/UI/Loader/Loade';
import NoItemExists from '../components/UI/noItemExists/NoItemExists';
import OneQuestion from '../components/NewTest/OneQuestion';
import TestHeader from '../components/NewTest/testHeader/TestHeader';
import { observer } from 'mobx-react-lite';
import EndTest from '../components/NewTest/endTest/EndTest';
import { useTestLogic } from '../Hooks/useTestLogic';

const NewTestPage = observer(() => {
  const { onAnswered, loading, sizeTest, activeTest, currentStep } = useTestLogic();
  const loader = (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Loader></Loader>
    </div>
  );
  if (loading) return loader;
  const noItemExists = <NoItemExists title="" buttonText="" />;
  if (Object.keys(activeTest).length === 0) return noItemExists;
  if (currentStep === sizeTest) return <EndTest />;
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TestHeader currentStep={currentStep} />
      <OneQuestion item={activeTest.questions[currentStep]} onAnswered={onAnswered} />
    </div>
  );
});
export default NewTestPage;
