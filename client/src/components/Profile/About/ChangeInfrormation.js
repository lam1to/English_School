import { useForm } from 'react-hook-form';
import CustomAutoComplete from '../../Form/CustomAutoComplete';
import TextInput from '../../Form/TextInput';
import { ProfileConstants } from '../Constants';

const ChangeInfrormation = ({ form, t }) => {
  return (
    <div className="about-change-information">
      <div className="item">
        <div className="item-label">{t('profile.about.english_level')}</div>
        <CustomAutoComplete
          form={form}
          placeholder="B1-Intermediate"
          name="englishLevel"
          isMultiple={false}
          data={ProfileConstants.ENGLISH_LEVEL}
          // rules={{
          //   required: {
          //     value: true,
          //     message: 'English level is required',
          //   },
          // }}
        />
      </div>
      <div className="item">
        <div className="item-label">{t('profile.about.languages')}</div>
        <CustomAutoComplete
          isMultiple={true}
          data={ProfileConstants.LANGUAGES}
          placeholder="English"
          name="languages"
          form={form}
        />
      </div>
      <div className="item mb-20">
        <div className="item-label">{t('profile.about.fun_facts')}</div>
        <TextInput
          rows={7}
          placeholder="Write a couple of fun facts about yourself"
          name="funFacts"
          form={form}
        />
      </div>
      <div className="item mb-20">
        <div className="item-label">{t('profile.about.about_me')}</div>
        <TextInput
          rows={7}
          placeholder="Write a little about yourself"
          name="aboutMe"
          form={form}
        />
      </div>
    </div>
  );
};
export default ChangeInfrormation;
