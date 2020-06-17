const dataFromFetch = (state = [], action) => {
  switch (action.type) {
    case "loadFetchedData":
      return action.payLoad;
    default:
      return state;
  }
};

export default dataFromFetch;
