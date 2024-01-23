export default (state, action) => {
  console.log(state);
  switch (action.type) {
    case "GET_TRASACTIONS":
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case "ADD":
      console.log(state);
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "DELETE":
      console.log(state);
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id != action.payload
        ),
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
