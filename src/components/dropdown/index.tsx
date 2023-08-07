import React, { useState, useEffect } from "react";
// import { Select, Option } from "@material-tailwind/react";
function DropDown(props: any) {
  const {} = props;
  const [showOption, setShowOption] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="flex flex-col w">
        <div
          className="text-black cursor-pointer bg-blue-100 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            setShowOption(!showOption);
          }}
        >
          :
        </div>
        {showOption && (
          <span className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            show details
          </span>
        )}
      </div>
    </>
  );
}

export default DropDown;
