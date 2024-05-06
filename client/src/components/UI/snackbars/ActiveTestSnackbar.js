import { useContext, useEffect, useState } from 'react';
import CustomSnackbar from '../customSnackbar/CustomSnackbar';
import { Context } from '../../..';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const ActiveTestSnackbar = observer((props) => {
  const { testStore } = useContext(Context);
  const { activeTest } = testStore;
  const { pathname } = useLocation();
  const isMatch = !!matchPath('/exercises/:id', pathname);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isMatch || Object.keys(activeTest).length === 0) setIsOpen(false);
    if (!isMatch && Object.keys(activeTest).length !== 0) setIsOpen(true);
  }, [activeTest, pathname]);
  const navigateTo = () => {
    navigate(`/exercises/${activeTest.id}`);
  };
  const onClose = () => {
    testStore.setActiveTest({});
  };
  return (
    <CustomSnackbar
      open={isOpen}
      message={"It seems you haven't finished your test"}
      handleClose={onClose}
      actionButtonName={`go to test ${activeTest?.topic}`}
      actionCallback={navigateTo}
    />
  );
});
export default ActiveTestSnackbar;
