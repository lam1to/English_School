import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar/NavBar';
import Loader from './components/UI/Loader/Loade';
import './Styles/app.css';
import WebFont from 'webfontloader';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check } from './http/userAPI';
import Spinner from 'react-bootstrap/Spinner';
import Footer from './components/Footer';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));

    // WebFont.load({
    //   google: {
    //     families: ['Montserrat', 'Montserrat bold', 'Montserrat medium'],
    //   },
    // });
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
        <Footer />
      </div>
    </BrowserRouter>
  );
});

export default App;
