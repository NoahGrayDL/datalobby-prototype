function entityReducer(state, action) {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        entities: action.payload
      }
    case "INSERT":
      const insertedEntities = state.entities.concat(action.payload)
      return { ...state, entities: insertedEntities }

    case "REMOVE":
      const deletedEntities = state.entities.filter(
        entity => entity.id !== action.id
      )
      return { ...state, entities: deletedEntities }
    default:
      return state
  }
}

export { entityReducer }
