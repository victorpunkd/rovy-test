import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ClassType.css";
import { filterDataWithClassType } from "../../Actions/filterDataWithType";
import { clearFilter } from "../../Actions/loadFetchdataToCurrentData";

const ClassType = (props) => {
  const [classTypesState, updateClassTypesArray] = useState([]);
  const [currentFilter, updateCurrentFilter] = useState("none");
  let classTypes = [];
  useEffect(() => {
    filterClassType();
  }, []);
  const { dataFromFetch } = useSelector((state) => state);
  const dispatched = useDispatch();

  const filterClassType = () => {
    props.data.map((data) => {
      classTypes.push(data.classType);
    });
    classTypes = [...new Set(classTypes)];
    updateClassTypesArray(classTypes);
  };
  return (
    <div className="classTypeContainer">
      <div className="w3-row-padding">
        {console.log(classTypesState)}
        {classTypesState.map((data) => (
          <div className="w3-half">
            <button
              className="w3-btn w3-tiny w3-red"
              onClick={() => {
                updateCurrentFilter(data);
                dispatched(filterDataWithClassType(data, dataFromFetch));
              }}
            >
              {data}
            </button>
          </div>
        ))}
      </div>
      <button
        style={{ marginTop: 10, marginLeft: 15 }}
        className="w3-green w3-btn w3-tiny"
        onClick={() => {
          updateCurrentFilter("none");
          dispatched(clearFilter(dataFromFetch));
        }}
      >
        Clear Filter
      </button>
      <div>Current Filter:{currentFilter}</div>
    </div>
  );
};

export default ClassType;
