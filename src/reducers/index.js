const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: state[action.item.id]
            ? state[action.item.id].quantity + 1
            : 1,
        },
      };
    }

    case "REMOVE_ITEM": {
      const copiedCart = { ...state };
      delete copiedCart[action.itemId];
      return copiedCart;
    }

    case "UPDATE_QUANTITY": {
      return {
        ...state,
        [action.itemId]: {
          ...state[action.itemId],
          quantity: action.quantity,
        },
      };
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
