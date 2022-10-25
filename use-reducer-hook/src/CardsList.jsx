import { Card } from "./Card";

export const CardsList = ({ allCards, dispatch }) => (
  <div style={{ width: "fit-content", minWidth: "250px", marginRight: "2rem" }}>
    <h3>All cards to select</h3>
    <p>Double click to select</p>
    {allCards.map((card) => (
      <Card
        key={card.id}
        handleDoubleClick={() => dispatch({ type: "SWITCH_CARD", card })}
        card={card}
      />
    ))}
  </div>
);
