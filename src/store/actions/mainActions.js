import { mainTypes } from "./actionTypes"

export const addCardAC = (cardData) => ({
  type: mainTypes.ADD_CARD,
  payload: cardData,
})

export const deleteCardAC = (cardData) => ({
  type: mainTypes.DELETE_CARD,
  payload: cardData,
})

export const editCardAC = (cardData) => ({
  type: mainTypes.EDIT_CARD,
  payload: cardData,
})