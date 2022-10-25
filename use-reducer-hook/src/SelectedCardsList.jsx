import { Card } from "./Card";

export const SelectedCardsList = ({ cards, dispatch }) => (
		<div>
			<h3>All selected cards</h3>
			<p>Double click to remove</p>
			{cards.map((card) => (
				<Card 
          key={`all ${card.id}`} 
          card={card} 
          handleDoubleClick={() => dispatch({ type: "SWITCH_CARD_BACK", card })} 
        />
			))}
		</div>
	);