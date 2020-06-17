import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./DataTab.css";
import { changeDataLoadStatus } from "../../Actions/changeDataLoadStatus";
import { loadFetchedData } from "../../Actions/loadFetchedData";
import { clearFilter } from "../../Actions/loadFetchdataToCurrentData";
import ClassCard from "../ClassCard/ClassCard";

const DataTab = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://devapi.fitswarm.com/api/classes/filterByEnterprise/5d838b96f3d6e155bd95692b?visibility=PUBLIC"
    );
    const fetchedData = await data.json();
    console.log(fetchedData.classes);
    dispatched(loadFetchedData(fetchedData.classes));
    dispatched(clearFilter(fetchedData.classes));
    dispatched(changeDataLoadStatus(true));
  };
  const { isDataLoaded, dataFromFetch, currentData } = useSelector(
    (state) => state
  );
  const dispatched = useDispatch();
  return (
    <div className="dataTabContainer">
      {isDataLoaded ? (
        <div>
          {currentData.map((data) => (
            <ClassCard dataProps={data} />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default DataTab;
