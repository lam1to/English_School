import { useTranslation } from 'react-i18next';
import '../../../Styles/advantages.css';
import AdvantagesRowCard from './AdvantagesRowCard';

const Advantages = ({ t }) => {
  return (
    <section className="advantages">
      <div className="_container advantages-container">
        <h5
          dangerouslySetInnerHTML={{
            __html: t('home.advantages.title'),
          }}
        />
        <AdvantagesRowCard t={t} />
      </div>
    </section>
  );
};
export default Advantages;
