import { useState } from 'react';
import About from '../components/Profile/About/About';
import Bio from '../components/Profile/Bio';
import HeaderProfile from '../components/Profile/HeaderProfile';
import '../Styles/profile.css';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const form = useForm({
    defaultValues: {
      englishLevel: '',
      languages: [],
      funcFacts: '',
      aboutMe: '',
      phone: '',
      location: new Date(),
    },
    mode: 'onChange',
  });
  const [t] = useTranslation();
  return (
    <div className="profile">
      <FormProvider {...form}>
        <div className="_container">
          <HeaderProfile isEdit={isEdit} setIsEdit={setIsEdit} form={form} />
          <div className="profile-information">
            <Bio form={form} isEdit={isEdit} t={t} />
            <About form={form} isEdit={isEdit} t={t} />
          </div>
        </div>
      </FormProvider>
    </div>
  );
};
export default Profile;
