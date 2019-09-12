

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
      console.log('aca', action.data)
      return { ...state, events: [...state.events, action.data.event] }
    }
    case 'JOIN_EVENT': {
      console.log("joinevent", action.event)
      // debugger
      const newEvents = state.events.map(event => {
        if (event.id === action.event.id) {
          return action.event
        } else {
          return event
        }
        })

      //   debugger
      
      return { ...state, events: [...newEvents] }
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
      return {...state, photos: [...state.photos, action.data]}
    }
    case 'EDIT_SPOT': {
      return {...state, spots: [...state.spots, action.data]}
    }
    default: {
      return state;
    }
  }
};