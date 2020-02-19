import { CONSTANTS } from "../actions";
let listID = 2;
const initialeState = [
  {
    title: "Last Episode",
    id: 0,
    card: [
      {
        id: 0,
        text: "we create a static list"
      },
      {
        id: 1,
        text: "we used a mix between"
      }
    ]
  },
  {
    title: "This Episode",
    id: 0,
    card: [
      {
        id: 0,
        text: "La vie est belle"
      },
      {
        id: 1,
        text: "C'est pas evident"
      },
      {
        id: 2,
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
        id: listID
      };
      listID += 1;
      return [...state, newList];
    default:
      return state;
  }
};

export default listReducer;
