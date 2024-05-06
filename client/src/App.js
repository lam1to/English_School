import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar/NavBar';
import Loader from './components/UI/Loader/Loade';
import './Styles/app.css';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check, getUserInfo } from './http/userAPI';
import Footer from './components/Footer';
import ActiveTestSnackbar from './components/UI/snackbars/ActiveTestSnackbar';

const App = observer(() => {
  const { userStore } = useContext(Context);
  const [loading, setLoading] = useState(true);
  // console.log('userStore in app = ', userStore);
  useEffect(() => {
    check()
      .then((data) => {
        getUserInfo(data.id).then((resUserInfo) => {
          const { id, userId, ...anotherData } = resUserInfo;
          userStore.setUser({ ...data, ...anotherData });
        });
        userStore.setRole(data.role);
        userStore.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <BrowserRouter>
      <div className="apps">
        <NavBar />
        <div className="content">
          <AppRouter />
        </div>
        <ActiveTestSnackbar />
        <Footer />
      </div>
    </BrowserRouter>
  );
});

export default App;
