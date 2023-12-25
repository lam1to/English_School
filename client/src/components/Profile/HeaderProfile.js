import { updateUserImg, updateUserInfo } from '../../http/userAPI';
import CustomButton from '../Form/CustomButton';
import { Context } from '../..';
import { useContext, useRef } from 'react';

const HeaderProfile = ({ isEdit, setIsEdit, form }) => {
  const { user } = useContext(Context);
  const onSubmit = async (data) => {
    console.log('dat2a = ', data);
    console.log('data date = ', new Date(data.hb).toISOString());

    const payload = {
      ...data,
      birthday: new Date(data.hb).toISOString(),
      languages: data.languages.map((oneL) => oneL.label).join(),
      englishLevel: data.englishLevel.label,
      userId: user.user.id,
    };
    console.log('payload = ', payload);
    await updateUserInfo(payload);
    setIsEdit(false);
  };
  const selectImg = async (e) => {
    if (e.target.files) {
      console.log('file = ', e.target.files[0]);
      const formData = new FormData();
      formData.append('img', e.target.files[0]);
      formData.append('userId', user.user.id);
      await updateUserImg(formData).then((response) => {
        user.setUser({ ...user.user, ...response });
      });
    }
  };
  console.log('user = ', user.user);
  const refImg = useRef();
  return (
    <div className="header-profile">
      <div className="personal-data">
        <div
          onClick={() => {
            refImg.current.click();
          }}
          className="avatar-block"
        >
          <img
            style={{ borderRadius: '20px' }}
            width="64px"
            height="64px"
            src={`${
              user.user.img
                ? `${process.env.REACT_APP_API_URL}${user.user.img}`
                : '/img/header/empty.png'
            }`}
          />
          <input
            onChange={selectImg}
            style={{ display: 'none' }}
            ref={refImg}
            type="file"
          />
        </div>
        <div className="fio-level">
          <h5>
            {user.user &&
              user.user.name &&
              user.user.lastName &&
              `${user.user.name} ${user.user.lastName}`}
          </h5>
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
