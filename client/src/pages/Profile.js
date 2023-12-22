import { useEffect, useLayoutEffect, useState } from 'react';
import About from '../components/Profile/About/About';
import Bio from '../components/Profile/Bio';
import HeaderProfile from '../components/Profile/HeaderProfile';
import '../Styles/profile.css';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ProfileConstants } from '../components/Profile/Constants';
import Loader from '../components/UI/Loader/Loade';

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
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
  useLayoutEffect(() => {});
  return (
    <div className="profile">
      {loading ? (
        <Loader />
      ) : (
        <FormProvider {...form}>
          <div className="_container">
            <HeaderProfile isEdit={isEdit} setIsEdit={setIsEdit} form={form} />
            <div className="profile-information">
              <Bio form={form} isEdit={isEdit} t={t} />
              <About form={form} isEdit={isEdit} t={t} />
            </div>
          </div>
        </FormProvider>
      )}
    </div>
  );
};
export default Profile;
