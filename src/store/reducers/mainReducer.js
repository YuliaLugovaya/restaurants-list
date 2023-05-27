import { mainTypes } from "../actions/actionTypes";

const initialState = {
  list: []
}

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case mainTypes.ADD_CARD: {
      const newTask = action.payload;
      return { ...state, list: [...state.list, newTask] }
    }
    case mainTypes.DELETE_CARD: {
      const deleteTask = action.payload;
      return { ...state, list: state.list.filter((el) => deleteTask !== el.id) }
    }
    case mainTypes.EDIT_CARD: {
      const { id, value, descriptionEdit, imageEdit, locationEdit } = action.payload;
      return {
        ...state, list: state.list.map((el) => {
          if (el.id === id) {
            return { ...el, text: value, description: descriptionEdit, image: imageEdit, location: locationEdit };
          }
          return el;
        })
      }
    }
    default: {
      return state;
    }
  }
}