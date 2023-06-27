import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import FileUploader from "./components/FileUploader";
import GridControler from "./components/gridcontroler/GridControler";
import InputControl from "./components/inputControl/InputControl";
import Chart from "./components/chart/Chart";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/fileupload"
          element={<FileUploader callback={() => {}} handleUpload={() => {}} />}
        />
        <Route path="/grid" element={<GridControler />} />
        <Route
          path="/inputcontrol"
          element={<InputControl name="" callback={() => {}} />}
        />
        <Route
          path="/chart"
          element={
            <Chart chartName="Traffic" chartType="bar" labels={[]} dataSet={[]} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);
