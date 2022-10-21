import { Card } from "./Card";

export const SelectedCardsList = ({ cards, setCards, setAllCards }) => {
	const handleDoubleClick = (card) => {
    setCards((oldCards) => oldCards.filter((c) => c.id !== card.id));
    setAllCards((oldCards) => [...oldCards, card]);
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