import { Card } from '@mui/material';

const AdvantagesCard = ({ card }) => {
  return (
    <Card className="advantages-card">
      <div className="number">{card.id + 1}</div>
      <img src={card.imgSrc} alt="imageCard" />
      <h5>{card.title}</h5>
      <p>{card.content}</p>
    </Card>
  );
};
export default AdvantagesCard;
