import { useTranslation } from 'react-i18next';
import AdvantagesCard from './AdvantagesCard';
import { advantagesConstants } from './AdvantagesConstants';

const AdvantagesRowCard = ({ t }) => {
  return (
    <section className="row-advantages">
      {advantagesConstants.card.map((oneCard) => (
        <AdvantagesCard key={oneCard.id} card={oneCard} t={t} />
      ))}
    </section>
  );
};
export default AdvantagesRowCard;
