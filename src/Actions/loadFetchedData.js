export const loadFetchedData = (data) => {
  return {
    type: "loadFetchedData",
    payLoad: data,
  };
};
