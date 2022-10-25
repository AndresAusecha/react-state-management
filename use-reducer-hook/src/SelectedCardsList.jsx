import { Card } from "./Card";

export const SelectedCardsList = ({ cards, dispatch }) => {
	const handleDoubleClick = (card) => {
    dispatch({ type: "ADD_CARD_ALL", card });
    dispatch({ type: "REMOVE_CARD", cardId: card.id });
  }
	return (
		<div>
			<h3>All selected cards</h3>
			<p>Double click to remove</p>
			{cards.map((card) => (
				<Card key={`all ${card.id}`} card={card} handleDoubleClick={handleDoubleClick} />
			))}
		</div>
	);
}