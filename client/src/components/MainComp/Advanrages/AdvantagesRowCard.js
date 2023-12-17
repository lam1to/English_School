import AdvantagesCard from './AdvantagesCard';
import { advantagesConstants } from './AdvantagesConstants';

const AdvantagesRowCard = () => {
  return (
    <section className="row-advantages">
      {advantagesConstants.card.map((oneCard) => (
        <AdvantagesCard key={oneCard.id} card={oneCard} />
      ))}
    </section>
  );
};
export default AdvantagesRowCard;
