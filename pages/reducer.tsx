const Reducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "Add_Data":
      return {
        ...state,
        data: action.payload
      };
    case "Update_Data":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
