const initialCardsInfo = [{
  id: "first-card",
  title: "First",
  description: "This is a card description"
},
{
  id: "second-card",
  title: "Second",
  description: "This is a card description"
},
{
  id: "thid-card",
  title: "Third",
  description: "This is a card description"
}
];

export const initialState = {
  allCards: initialCardsInfo,
  cards: []
}

const handleAction = (cardId) => (c) => c.id !== cardId


export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_CARDS":
      return {
        ...state,
        allCards: action.allCards
      }
    case "SET_CARDS":
      return {
        ...state,
        cards: action.cards
      }
    case "SWITCH_CARD":
      return {
        ...state,
        cards: [...state.cards, action.card],
        allCards: state.allCards.filter(handleAction(action.card.id))
      }
    case "SWITCH_CARD_BACK":
      return {
        ...state,
        allCards: [...state.allCards, action.card],
        cards: state.cards.filter(handleAction(action.card.id))
      }
    case "RESET_CARDS_ALL":
      return {
         ...state,
        allCards: initialCardsInfo,
        cards: []
      }
    default:
      throw Error("Action not found");
  }
}