const initialState = ''

const filterReducer = (state = initialState, action) => {
  switch(action.type){
    case 'FILTER':
      const filterState = action.filter
      return filterState
    default: return state
  }
}

export const filter = (filter) => {
  return{
    type: 'FILTER',
    filter: filter
  }
}

export default filterReducer