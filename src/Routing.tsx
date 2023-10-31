import React from "react";
import DashBoard from "./DashBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import FileUploader from "./components/FileUploader";
import GridControler from "./components/gridcontroler/GridControler";
import InputControl from "./components/inputControl/InputControl";
import Chart from "./components/chart/Chart";
import Table from "./components/table/index";
function Routing() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route
            path="/fileupload"
            element={
              <FileUploader
                callback={() => {}}
                handleUpload={() => {}}
                name="File Upload"
                showUpload={true}
              />
            }
          />
          <Route path="/grid" element={<GridControler />} />
          <Route
            path="/inputcontrol"
            element={<InputControl name="" callback={() => {}} />}
          />
          <Route
            path="/chart"
            element={
              <Chart
                chartName="Traffic"
                chartType="bar"
                labels={[]}
                dataSet={[]}
              />
            }
          />
          <Route
            path="/Table"
            element={
              <Table
                CheckBoxKey={""}
                CheckBox={true}
                rowdata={[]}
                coloumName={[]}
                mapper={[]}
              />
            }
          />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default Routing;
