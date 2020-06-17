const currentData = (state = [], action) => {
  switch (action.type) {
    case "filterDataWithClassType":
      return action.fetchedData.filter(
        (data) => data.classType === action.filterData
      );
    case "clearFilter":
      return action.payLoad;
    default:
      return state;
  }
};

export default currentData;
