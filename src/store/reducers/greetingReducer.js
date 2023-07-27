const greetingReducer = (state = '', action) => {
  switch (action.type) {
    case 'FETCH_GREETING_REQUEST':
      return '';
    case 'FETCH_GREETING_SUCCESS':
      return action.payload;
    case 'FETCH_GREETING_FAILURE':
      return '';
    default:
      return state;
  }
};

export default greetingReducer;