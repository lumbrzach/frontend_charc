import { joinEvent } from '../services/backend'

const initialState = {
    users: [],
    events: [],
    spots: []
  };
  
export default (state = initialState, action) => {
  switch (action.type) {
    //   case 'EAT_SUSHI': {
    //     const alreadyEaten = state.eaten.includes(action.id)
    //     const tooPricey = action.price > state.budget
    //     if (alreadyEaten || tooPricey) {
    //       return state;
    //     } else {
    //       const eaten = state.eaten.concat(action.id)
    //       const budget = state.budget - action.price
    //       return { ...state, eaten, budget }
    //     }
    //   }
    case 'GET_SPOTS': {
      return { ...state, spots: action.data }
    }
    case 'GET_EVENTS': {
      return { ...state, events: action.data }
    }
    case 'ADD_SPOT': {
      return { ...state, spots: [...state.spots, action.data] }
    }
    case 'ADD_EVENT': {
      return { ...state, events: [...state.events, action.data] }
    }
    case 'JOIN_EVENT': {
      joinEvent(action.event_id)
    }
    case 'ADD_JOURNAL': {
      
    }
    break;
    default: {
      return state;
    }
  }
};