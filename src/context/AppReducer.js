export default (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD":
      console.log(state);
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE":
      console.log(state);
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id != action.payload
        ),
      };
    default:
      return state;
  }
};
