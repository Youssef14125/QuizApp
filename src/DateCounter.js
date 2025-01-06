const initialeState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "openAccount") return state;
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        balance: 500,
        isActive: true,
      };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "requestLoad":
      return "";
    case "payLoan":
      return "";
    case "closeAccount":
      return "";
    default:
      throw new Error("Unknown");
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );
}
