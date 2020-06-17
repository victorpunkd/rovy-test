import React from "react";
import "./App.css";
import ControlTab from "./Components/ControlTab/ControlTab";
import DataTab from "./Components/DataTab/DataTab";

function App() {
  return (
    <div className="App ">
      <div className="dataContainer w3-row-padding">
        <div className="w3-third">
          <ControlTab />
        </div>
        <div className="w3-rest">
          <DataTab />
        </div>
      </div>
    </div>
  );
}

export default App;
