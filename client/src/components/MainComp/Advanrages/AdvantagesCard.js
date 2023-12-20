import { Card } from '@mui/material';

const AdvantagesCard = ({ card, t }) => {
  return (
    <Card className="advantages-card">
      <div className="number">{card.id + 1}</div>
      <img src={card.imgSrc} alt="imageCard" />
      <h5
        dangerouslySetInnerHTML={{
          __html: t(card.title),
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: t(card.content),
        }}
      />
    </Card>
  );
};
export default AdvantagesCard;
