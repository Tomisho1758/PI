import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialGlobalState = {
    favorites:[],
    characters: [],
   access: false,
  aunMas: [],
  detail: {}
};

export default function rootReducer(state = initialGlobalState, action) {
    // Nos fijabamos por el TYPE de la accion
    switch (action.type) {
      case ADD_FAV:
    
        return { ...state, favorites: [...state.favorites, action.payload], detail: {algo: "MESSI"} };
      case REMOVE_FAV:
   
        return {
          ...state,
          favorites: state.favorites.filter((fav) => fav.id !== action.payload),
        };
      default:
        return { ...state };
    }
  }