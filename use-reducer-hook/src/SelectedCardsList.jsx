import { Card } from "./Card";

export const SelectedCardsList = ({ cards, dispatch }) => {
	const handleDoubleClick = (card) => {
    dispatch({ type: "ADD_CARD", card });
    dispatch({ type: "REMOVE_CARD", cardId: card.id });
  }
	return (
		<div>
			<h3>All selected cards</h3>
			<p>Double click to remove</p>
			{cards.map((card) => (
				<Card card={card} handleDoubleClick={handleDoubleClick} />
			))}
		</div>
	);
}