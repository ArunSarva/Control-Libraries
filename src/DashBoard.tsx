/* eslint-disable jsx-a11y/iframe-has-title */
import React, { ChangeEvent, useState } from "react";
import "./DashBoard.css";
import Charts from "./components/chart/Chart";
import GridControler from "./components/gridcontroler/GridControler";
import InputControl from "./components/inputControl/InputControl";
import FileUploader from "./components/FileUploader";
import Table from "./components/table";
import VideoPlayer from "./components/playerHooks/index";
import type { IData } from "./components/chart/types";
import * as d3 from "d3";
import { BarChart } from "./components/chart/D3jsChart";
import DropDown from "./components/dropdown";
import ImageGallery from "./components/imageGallery";
import AudioPlayer from "./components/audioPlayer";
import Calender from "./components/calender";
import RadioButtonsGroup from "./components/radioButton";
import Modal from "../src/components/modal";
import video1 from "../src/assets/CinematicBackground.mp4";
import video2 from "../src/assets/video_1.mp4";
import video3 from "../src/assets/video_2.mp4";
import video4 from "../src/assets/video_3.mp4";
import Game from "../src/components/game/index";
import ToggleSwitch from "./components/toggleswitch/ToggleSwitch";
import SearchBar from "./components/searchBox/searchBar";
import PdfViewer from "./components/pdf/PDFViewer";

function App() {
  const technologies = [
    {
      type: "CMS",
      subcategories: [
        {
          name: "Squarespace",
          description:
            "Squarespace provides Software-as-a-Service (SaaS) for website building and hosting, and allows users to use pre-built website templates.",
          website: "http://www.squarespace.com",
          icon: "https://www.wappalyzer.com/images/icons/Squarespace.png",
          used_by: 550865,
        },
      ],
    },
    {
      type: "Ecommerce",
      subcategories: [
        {
          name: "Squarespace Commerce",
          description:
            "Squarespace Commerce is an ecommerce platform designed to facilitate the creation of websites and online stores, with domain registration and web hosting included.",
          website: "https://www.squarespace.com/ecommerce-website",
          icon: "https://www.wappalyzer.com/images/icons/Squarespace.png",
          used_by: 135587,
        },
      ],
    },
    {
      type: "Reverse proxies",
      subcategories: [
        {
          name: "Nginx",
          description:
            "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",
          website: "http://nginx.org/en",
          icon: "https://www.wappalyzer.com/images/icons/Nginx.svg",
          used_by: 544934,
        },
      ],
    },
    {
      type: "Web servers",
      subcategories: [
        {
          name: "Nginx",
          description:
            "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",
          website: "http://nginx.org/en",
          icon: "https://www.wappalyzer.com/images/icons/Nginx.svg",
          used_by: 544934,
        },
      ],
    },
    {
      type: "Analytics",
      subcategories: [
        {
          name: "Google Analytics",
          description:
            "Google Analytics is a free web analytics service that tracks and reports website traffic.",
          website: "http://google.com/analytics",
          icon: "https://www.wappalyzer.com/images/icons/Google%20Analytics.svg",
          used_by: 1096566,
        },
      ],
    },
    {
      type: "JavaScript libraries",
      subcategories: [
        {
          name: "Moment.js",
          description:
            "Moment.js is a free and open-source JavaScript library that removes the need to use the native JavaScript Date object directly.",
          website: "https://momentjs.com",
          icon: "https://www.wappalyzer.com/images/icons/Moment.js.svg",
          used_by: 628495,
        },
      ],
    },
    {
      type: "Font scripts",
      subcategories: [
        {
          name: "Typekit",
          description:
            "Typekit is an online service which offers a subscription library of fonts.",
          website: "http://typekit.com",
          icon: "https://www.wappalyzer.com/images/icons/Typekit.png",
          used_by: 27074,
        },
      ],
    },
  ];
  const chartlabels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday ",
  ];
  // const path = require("path");
  const dataSet = [2112, 2343, 2545, 3423, 2365, 1985, 987];
  const [name, setName] = useState("");
  const [fileName, setFileName] = useState("");
  const [PdffileName, setPdfFileName] = useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const videos = [video1, video2, video3, video4];
  function handlechanges(event: any) {
    setName(event.target.value);
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileName(e.target.files[0].name);
      setPdfFileName(URL.createObjectURL(e.target.files[0]));
      console.log(URL.createObjectURL(e.target.files[0]), "jj");
    }
  };
  function handleFileupload() {
    setPdfFileName(fileName);
    console.log(fileName, "Uploaded fileName");
  }
  const tableData = [
    {
      Productname: "Apple iMac 27",
      Color: "silver",
      Category: "math",
      price: "25000",
      action: "edit",
    },
    {
      Productname: "Apple iMac 28",
      Color: "black",
      Category: "math",
      price: "25000",
      action: "edit",
    },
  ];
  const mapper = ["Productname", "Color", "Category", "price", "action"];

  const coloumName = ["Product name", "Color", "Category", "price", "action"];
  const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));

  function onMouseMove(event: any) {
    const [x, y] = d3.pointer(event);
    setData(data.slice(-200).concat(Math.atan2(x, y)));
  }
  const BAR_CHART_DATA: IData[] = [
    { label: "Apples", value: 100 },
    { label: "Bananas", value: 200 },
    { label: "Oranges", value: 50 },
    { label: "Kiwis", value: 150 },
  ];

  const DropdownOptions = [10, 20, 30, 40];

  const getcurrentDate = {
    from: {
      date: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    },
  };

  function getTheTime(event: { target: { value: any } }) {
    setSelectedDate(event.target.value.date);
    setShowModal(true);
  }
  const gender = ["Female", "male", "others"];

  function modalBody() {
    return (
      <>
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">Details</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-25 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              x
            </button>
          </div>
          <div className="relative p-6 flex-auto">{selectedDate}</div>
        </div>
      </>
    );
  }

  return (
    <div className=" text-center" onMouseMove={onMouseMove}>
      <div>
        <h1 className="componentsHeading">Document Viewer</h1>

        <span>
          {PdffileName ? (
            <div>
              <div className=" flex justify-center cursor-pointer ">
                <div
                  className="w-1/4 border-solid border-2 bg-slate-400 border-[#242424] underline text-[#242424]"
                  onClick={() => {
                    setPdfFileName("");
                    document.getElementById("formFile")?.click();
                  }}
                >
                  You can change PDF file here
                </div>
              </div>
              <div className="PdfContainer">
                <PdfViewer file={PdffileName} />
              </div>
            </div>
          ) : (
            <div>
              <FileUploader
                callback={(e) => {
                  handleFileChange(e);
                }}
                handleUpload={handleFileupload}
                name={""}
                accept=".pdf"
                showUpload={false}
              />
            </div>
          )}
        </span>
      </div>
      <h1 className="componentsHeading">File Uploader</h1>
      <div>
        <FileUploader
          callback={(e) => {
            handleFileChange(e);
          }}
          handleUpload={handleFileupload}
          name={"File Upload"}
          showUpload={true}
        />
        <div>Uploaded file name : {fileName}</div>
      </div>

      <hr></hr>
      <div>
        <h1 className="componentsHeading">search Bar</h1>
        <SearchBar />
      </div>
      <div>
        <h1 className="componentsHeading">Toggle Switch</h1>
        <ToggleSwitch />
      </div>
      <div>
        <h1 className="componentsHeading">Tic-Tac-Toe Game</h1>
        <Game />
      </div>
      <h1 className="componentsHeading">Radio Button</h1>
      <div className="flex justify-center">
        <RadioButtonsGroup label="gender" options={gender} />
      </div>
      <hr></hr>

      <h1 className="componentsHeading">Calender</h1>
      <div className="flex justify-center">
        <Calender
          callback={(e: any) => {
            getTheTime(e);
          }}
          currentDate={getcurrentDate}
          disableCurrentDate={false}
        />
      </div>
      <hr></hr>
      <h1 className="componentsHeading"> Audio Player</h1>
      <div className="flex justify-center">
        <AudioPlayer />
      </div>
      <hr></hr>
      <h1 className="componentsHeading">Image Gallery</h1>
      <div className="flex justify-center w-4/5 ml-auto mr-auto">
        <ImageGallery />
      </div>
      <hr></hr>
      <h1 className="componentsHeading">DropDown Button</h1>
      <div className="flex justify-center">
        <DropDown label={"Amount"} options={DropdownOptions} />
      </div>
      <hr></hr>
      <h1 className="componentsHeading">Video Player</h1>
      <div>
        <VideoPlayer videos={videos} />
      </div>

      <hr></hr>
      <h1 className="componentsHeading">Table</h1>
      <div>
        {/* <Menuitem /> */}
        <h1>Table</h1>
        <Table
          CheckBox={true}
          CheckBoxKey={"Productname"}
          rowdata={tableData}
          coloumName={coloumName}
          mapper={mapper}
        />
      </div>

      <hr></hr>
      <h1 className="componentsHeading">Barchart D3-js</h1>
      <div>
        <h2>Bar chart</h2>
        <BarChart data={BAR_CHART_DATA} />
      </div>
      <hr></hr>
      <h1 className="componentsHeading">Barchart Tailwind css</h1>
      <div>
        <h1 className="text-black">Chart</h1>
        <Charts
          chartName="Traffic"
          chartType="bar"
          labels={chartlabels}
          dataSet={dataSet}
        />
      </div>
      <hr></hr>
      <h1 className="componentsHeading">Input Controler</h1>
      <div>
        <InputControl
          type="text"
          name="First Name"
          callback={(e) => {
            handlechanges(e);
          }}
          errorMessage="Field Required"
        />
        <div>Entered name :{name}</div>
      </div>

      <hr></hr>
      <h1 className="componentsHeading">Grid Controler</h1>
      <div>
        <h1>Grid</h1>
        <GridControler technologies={technologies} />
      </div>
      <hr></hr>
      <Modal showModal={showModal} children={modalBody()} />
    </div>
  );
}

export default App;
