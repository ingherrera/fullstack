const noteReducer = require('./noteReducer');
import deepFreeze from "deep-freeze";

describe('noteReducer', () => {
  test('retorna un nuevo estado con la accion NEW_NOTE', () => { 
    const state = []

    const action = {
      type: 'NEW_NOTE',
      data: {
        content: 'El estado de la App esta en la store de Redux',
        important: true,
        id: 1
      }
    }

    deepFreeze(state)
    const newState = noteReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toContaintEqual(action.data)
  })
})