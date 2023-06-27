import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import Charts from "./components/chart/Chart";
import GridControler from "./components/gridcontroler/GridControler";
import InputControl from "./components/inputControl/InputControl";
import FileUploader from "./components/FileUploader";
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
  const dataSet = [2112, 2343, 2545, 3423, 2365, 1985, 987];
  const [name, setName] = useState("");
  const [fileName, setFileName] = useState("");

  function handelchanges(event: any) {
    setName(event.target.value);
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileName(e.target.files[0].name);
    }
  };

  function handleFileupload() {
    console.log(fileName, "arun");
  }
  return (
    <div className=" text-center">
      Hello Welcome
      <Charts
        chartName="Traffic"
        chartType="bar"
        labels={chartlabels}
        dataSet={dataSet}
      />
      <hr></hr>
      <InputControl
        type="password"
        name="First Name"
        callback={(e) => {
          handelchanges(e);
        }}
      />
      <div>Entered name :{name}</div>
      <hr></hr>
      <FileUploader
        callback={(e) => {
          handleFileChange(e);
        }}
        handleUpload={handleFileupload}
      />
      <div>Uploaded file name : {fileName}</div>
      <hr></hr>
      <GridControler technologies={technologies} />
    </div>
  );
}

export default App;
