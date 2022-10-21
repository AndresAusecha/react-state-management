export const Card = (props) => {
  const { card, handleDoubleClick } = props;
  const { title, description } = card;
  return (
    <div 
      onDoubleClick={() => handleDoubleClick(card)}
      style={{ border: '2px solid white', width: "250px", height: "fit-content", marginTop: "1rem" }}
    >
      <h3>
        {title}
      </h3>
      <p>
        {description}
      </p>
    </div>
  );
}