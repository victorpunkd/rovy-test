const isDataLoaded = (state = false, action) => {
  switch (action.type) {
    case "changeDataLoadStatus":
      return action.payLoad;
    default:
      return state;
  }
};

export default isDataLoaded;
