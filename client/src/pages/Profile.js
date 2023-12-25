import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import About from '../components/Profile/About/About';
import Bio from '../components/Profile/Bio';
import HeaderProfile from '../components/Profile/HeaderProfile';
import '../Styles/profile.css';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ProfileConstants } from '../components/Profile/Constants';
import Loader from '../components/UI/Loader/Loade';
import { getUserInfo } from '../http/userAPI';
import { Context } from '..';

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const { user } = useContext(Context);
  const form = useForm({
    defaultValues: {
      englishLevel: ProfileConstants.ENGLISH_LEVEL[0],
      languages: [ProfileConstants.LANGUAGES[0]],
      funFacts: '',
      about: '',
      phone: '',
      location: '',
      hb: new Date(),
    },
    mode: 'onChange',
  });
  const [t] = useTranslation();
  const [loading, setLoading] = useState(false);
  const [dataUser, setDataUser] = useState({});
  console.log('dataUser = ', dataUser);
  useLayoutEffect(() => {
    getDataUser();
  }, [user.user]);
  const getDataUser = async () => {
    const data = await getUserInfo(user.user.id);
    setDataUser(data);
  };
  console.log('info usrr =', user);
  return (
    <div className="profile">
      {loading ? (
        <Loader />
      ) : (
        <FormProvider {...form}>
          <div className="_container">
            <HeaderProfile isEdit={isEdit} setIsEdit={setIsEdit} form={form} />
            <div className="profile-information">
              <Bio userData={user.user} form={form} isEdit={isEdit} t={t} />
              <About userData={user.user} form={form} isEdit={isEdit} t={t} />
            </div>
          </div>
        </FormProvider>
      )}
    </div>
  );
};
export default Profile;
