import { useState } from 'react';
import About from '../components/Profile/About/About';
import Bio from '../components/Profile/Bio';
import HeaderProfile from '../components/Profile/HeaderProfile';
import '../Styles/profile.css';
import { useForm } from 'react-hook-form';

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const form = useForm({
    defaultValues: {
      englishLevel: '',
      languages: [],
      funcFacts: '',
      aboutMe: '',
    },
    mode: 'onChange',
  });
  return (
    <div className="profile">
      <div className="_container">
        <HeaderProfile isEdit={isEdit} setIsEdit={setIsEdit} form={form} />
        <div className="profile-information">
          <Bio></Bio>
          <About form={form} isEdit={isEdit} />
        </div>
      </div>
    </div>
  );
};
export default Profile;
