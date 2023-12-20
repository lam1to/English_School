const StaticInformation = () => {
  return (
    <div className="card-row-items">
      <ul>
        <li>
          <div className="label">English level</div>
          <p>B1 - Intermediate</p>
        </li>
        <li>
          <div className="label">Languages</div>
          <p>Russian, English</p>
        </li>
        <li>
          <div className="label">Fun facts</div>
          <p>I adore fries with ice cream!</p>
        </li>
        <li></li>
      </ul>
      <div style={{ display: 'flex', width: '100%' }}>
        <div className="label">About me</div>
        <div className="about-content">
          I can say about myself that I am hardworking, attentive, organized,
          and effectively solve tasks. My hobbies are purely feminine — I love
          needlework: I knit, sew, embroider. I love communicating with people
          and spending time with friends!
        </div>
      </div>
    </div>
  );
};
export default StaticInformation;
