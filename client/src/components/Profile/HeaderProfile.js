import { updateUserImg, updateUserInfo } from '../../http/userAPI';
import CustomButton from '../Form/CustomButton';
import { Context } from '../..';
import { useContext, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { observer } from 'mobx-react-lite';

const HeaderProfile = observer(() => {
  const { userStore } = useContext(Context);
  const { handleSubmit } = useFormContext();
  const { user, isEditMode } = userStore;
  console.log('isEditMode = ', isEditMode);
  const { id, img, name, lastName, email } = user;
  const onSubmit = async (data) => {
    console.log('data form = ', data);
    const payload = {
      ...data,
      birthday: new Date(data.hb).toISOString(),
      languages: data.languages.map((oneL) => oneL.label).join(),
      englishLevel: data.englishLevel.label,
      userId: id,
    };
    await updateUserInfo(payload).then((res) => {
      if (res) {
        console.log('res = ', res);
        const { id, userId, ...newData } = res;
        userStore.setUser({ ...user, ...newData });
      }
    });
    userStore.setIsEditMode(false);
  };
  const selectImg = async (e) => {
    if (e.target.files) {
      const formData = new FormData();
      formData.append('img', e.target.files[0]);
      formData.append('userId', id);
      await updateUserImg(formData).then((response) => {
        userStore.setUser({ ...user, img: response.img });
      });
    }
  };
  console.log('user in header profile = ', user);
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
            src={`${img ? `${process.env.REACT_APP_API_URL}${img}` : '/img/header/empty.png'}`}
          />
          <input onChange={selectImg} style={{ display: 'none' }} ref={refImg} type="file" />
        </div>
        <div className="fio-level">
          <h5>{user && name && lastName ? `${name} ${lastName}` : email}</h5>
          <p>B1 - Intermediate</p>
        </div>
      </div>
      {isEditMode ? (
        <div className="header-profile-block-button">
          <CustomButton
            isOutline={true}
            isSmall={true}
            title="Cancel"
            onClick={() => userStore.setIsEditMode(false)}
          />
          <CustomButton
            isOutline={false}
            isSmall={true}
            title="Save"
            onClick={() => {
              handleSubmit(onSubmit)();
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
            userStore.setIsEditMode(true);
            console.log('edit');
          }}
        />
      )}
    </div>
  );
});
export default HeaderProfile;
