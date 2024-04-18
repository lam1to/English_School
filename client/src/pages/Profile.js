import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import About from '../components/Profile/About/About';
import Bio from '../components/Profile/Bio';
import HeaderProfile from '../components/Profile/HeaderProfile';
import '../Styles/profile.css';
import { FormProvider, useForm } from 'react-hook-form';
import { ProfileConstants } from '../components/Profile/Constants';
import Loader from '../components/UI/Loader/Loade';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const Profile = observer(() => {
  const { userStore } = useContext(Context);
  console.log('dataUser in Profile = ', userStore);
  const { user } = userStore;
  const { funFacts, about, phone, location } = user;
  const form = useForm({
    defaultValues: {
      englishLevel: ProfileConstants.ENGLISH_LEVEL[0],
      languages: [ProfileConstants.LANGUAGES[0]],
      funFacts: funFacts ? funFacts : '',
      about: about ? about : '',
      phone: phone ? phone : '',
      location: location ? location : '',
      hb: new Date(),
    },
    mode: 'onChange',
  });
  const [loading, setLoading] = useState(false);
  return (
    <div className="profile">
      {loading ? (
        <Loader />
      ) : (
        <FormProvider {...form}>
          <div className="_container">
            <HeaderProfile />
            <div className="profile-information">
              <Bio />
              <About />
            </div>
          </div>
        </FormProvider>
      )}
    </div>
  );
});
export default Profile;
