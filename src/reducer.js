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

function coaReducer(state, action) {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        coaList: action.payload
      }
    case "INSERT":
      const insertedCoAList = state.coaList.concat(action.payload)
      return { ...state, coaList: insertedCoAList }
    case "REMOVE":
      const deletedCoAList = state.coaList.filter(coa => coa.id !== action.id)
      return { ...state, coaList: deletedCoAList }
    default:
      return state
  }
}

function paperReducer(state, action) {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        papers: action.payload
      }
    case "INSERT":
      const insertedPapers = state.papers.concat(action.payload)
      return { ...state, papers: insertedPapers }
    case "REMOVE":
      const deletedPapers = state.papers.filter(paper => paper.id !== action.id)
      return { ...state, papers: deletedPapers }
    default:
      return state
  }
}

export { entityReducer, coaReducer, paperReducer }
