import { ACTION_TYPE } from "../types/actionType";
import { ActionProps } from "../types/model";

export const AddtoCartreducer = (state = [], action: ActionProps) => {
  switch (action.type) {
    case ACTION_TYPE.PRODUCTS_ADD_TO_CART:
      return [...state, action.payload];
      break;
    case ACTION_TYPE.DELETE_PRODUCT_CART:
      const productIdToDelete = action.payload.productId;
      const newState = state.filter(
        (item: any) => item.productId !== productIdToDelete
      );
      console.log("newState:", newState);
      return [...newState];
      break;
    case ACTION_TYPE.DECREASE_PRODUCT_CART:
      const newStateDecrease = state.map((item: any) => {
        if (item.productId === action.payload.productId && item.quantity>0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item ; 
      });
      return newStateDecrease ; 
      break ; 
    case ACTION_TYPE.INCREASE_PRODUCT_CART:
      const newStateIncrease = state.map((item: any) => {
        if (item.productId === action.payload.productId && item.quantity<99) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item ; 
      });
      return newStateIncrease ; 
      break ;
    case ACTION_TYPE.RESET_ACTION:
      return [] ; 
      break ;  
    default:
      return state;
      break;
  }
};
