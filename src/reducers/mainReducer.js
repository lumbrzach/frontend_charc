import { joinEvent } from '../services/backend'

const initialState = {
    users: [],
    events: [],
    spots: [],
    journals: [],
    photos: []
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
    case 'GET_JOURNALS': {
      return { ...state, journals: action.data }
    }
    case 'GET_PHOTOS': {
      return { ...state, photos: action.data }
    }
    case 'ADD_JOURNAL': {
      return {...state, journals: [...state.journals, action.data]}
    }
    case 'ADD_PHOTO': {
      return {...state, photos: [...state.journals, action.data]}
    }
    case 'EDIT_SPOT': {
      return {...state, spots: [...state.spots, action.data]}
    }
    default: {
      return state;
    }
  }
};