import { CONSTANTS } from "../actions";
let listID = 2;
let cardID = 5;
const initialeState = [
  {
    title: "Last Episode",
    id: `list-${0}`,
    card: [
      {
        id: `card-${0}`,
        text: "we create a static list"
      },
      {
        id: `card-${1}`,
        text: "we used a mix between"
      }
    ]
  },
  {
    title: "This Episode",
    id: `list-${1}`,
    card: [
      {
        id: `card-${2}`,
        text: "La vie est belle"
      },
      {
        id: `card-${3}`,
        text: "C'est pas evident"
      },
      {
        id: `card-${4}`,
        text: "Les échecs nous rend plus fort !"
      }
    ]
  }
];

const listReducer = (state = initialeState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload.title,
        card: [],
        id: `list-${listID}`
      };
      listID += 1;
      return [...state, newList];
    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`
      };
      cardID += 1;
      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            card: [...list.card, newCard]
          };
        } else {
          return list;
        }
      });
      return newState;
    }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd
      } = action.payload;
      const newState = [...state];

      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const cards = list.card.splice(droppableIndexStart, 1);
        list.card.splice(droppableIndexEnd, 0, ...cards);
      }
      //autre liste
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find(list => droppableIdStart === list.id);
        const cards = listStart.card.splice(droppableIndexStart, 1);
        const listEnd = state.find(list => droppableIdEnd === list.id);
        listEnd.card.splice(droppableIndexEnd, 0, ...cards);
      }
      return newState;

    default:
      return state;
  }
};

export default listReducer;
