import React from "react";
import { useSelector } from "react-redux";
import "./ControlTab.css";
import ClassType from "../ClassType/ClassType";

const ControlTab = () => {
  const { isDataLoaded, dataFromFetch } = useSelector((state) => state);
  return (
    <div className="controlTabContainer w3-card">
      <div className="headingControlTab">Find Classes</div>
      <div className="sectionContainer">
        <div className="sectionHeading">Search:</div>
        <div className="searchBox w3-row">
          <div className="w3-col" style={{ width: "5%" }}>
            <i class="fa fa-search w3-text-gray" aria-hidden="true"></i>
          </div>
          <input type="text" className="searchInputBox" />
        </div>
      </div>
      <div className="sectionContainer">
        <div className="sectionHeading">Class Types</div>
        <div>
          {isDataLoaded ? (
            <div>
              <div>
                <ClassType data={dataFromFetch} />
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ControlTab;
