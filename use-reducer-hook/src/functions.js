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
    case "REMOVE_CARD": 
      return {
        ...state,
        cards: state.cards.filter((c) => c.id !== action.cardId)
      }
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, action.card]
      }
    case "REMOVE_CARD_ALL": 
      return {
        ...state,
        allCards: state.allCards.filter((c) => c.id !== action.cardId)
      }
    case "ADD_CARD_ALL":
      return {
        ...state,
        allCards: [...state.allCards, action.card]
      }
    case "RESET_CARDS_ALL":
        return {
          ...state,
          allCards: initialCardsInfo
        }
    default:
      throw Error("Action not found");
  }
}