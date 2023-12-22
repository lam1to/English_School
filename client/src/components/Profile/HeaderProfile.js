import { updateUserInfo } from '../../http/userAPI';
import CustomButton from '../Form/CustomButton';
import { Context } from '../..';
import { useContext } from 'react';

const HeaderProfile = ({ isEdit, setIsEdit, form }) => {
  const { user } = useContext(Context);
  const onSubmit = async (data) => {
    console.log('dat2a = ', data);
    const payload = {
      ...data,
      birhday: data.hb,
      languages: data.languages.map((oneL) => oneL.label).join(),
      englishLevel: data.englishLevel.label,
      userId: user.user.id,
    };
    console.log('payload = ', payload);
    await updateUserInfo(payload);
    setIsEdit(false);
  };
  return (
    <div className="header-profile">
      <div className="personal-data">
        <div
          onClick={() => console.log('click add photo')}
          className="avatar-block"
        >
          <img src="/img/header/empty.png" />
        </div>
        <div className="fio-level">
          <h5>Anastasia Kokashinskaya</h5>
          <p>B1 - Intermediate</p>
        </div>
      </div>
      {isEdit ? (
        <div className="header-profile-block-button">
          <CustomButton
            isOutline={true}
            isSmall={true}
            title="Cancel"
            onClick={() => setIsEdit(false)}
          />
          <CustomButton
            isOutline={false}
            isSmall={true}
            title="Save"
            onClick={() => {
              form.handleSubmit(onSubmit)();
            }}
          />
        </div>
      ) : (
        <CustomButton
          className="edit-button"
          isOutline={false}
          isSmall={true}
          title="Edit"
          onClick={() => {
            setIsEdit(true);
            console.log('edit');
          }}
        />
      )}
    </div>
  );
};
export default HeaderProfile;
