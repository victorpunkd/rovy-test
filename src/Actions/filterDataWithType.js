export const filterDataWithClassType = (filterType, fetchedData) => {
  return {
    type: "filterDataWithClassType",
    filterData: filterType,
    fetchedData: fetchedData,
  };
};
