import '../../../Styles/advantages.css';
import AdvantagesRowCard from './AdvantagesRowCard';

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="_container advantages-container">
        <h5>
          Почему вам точно понравится <span>Easy English?</span>
        </h5>
        <AdvantagesRowCard />
      </div>
    </section>
  );
};
export default Advantages;
