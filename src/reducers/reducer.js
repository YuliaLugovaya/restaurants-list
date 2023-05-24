export const initialState = {
  list: []
}

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("cards")) || initialValue;

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_CARD': {
      const newTask = action.payload;
      return { ...state, list: [...state.list, newTask] }
    }
    case 'DELETE_CARD': {
      const deleteTask = action.payload;
      return { ...state, list: state.list.filter((el) => deleteTask !== el.id) }
    }
    case 'EDIT_CARD': {
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