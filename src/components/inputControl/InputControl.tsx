import React, { ChangeEvent, useState } from "react";
interface props {
  name: string;
  callback: (arg: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  errorMessage?: string;
}
function InputControl(props: props) {
  const { name, callback, type, errorMessage } = props;
  const [error, setError] = useState(errorMessage)
  return (
    <>
      <div className="mb-6 md:justify-start  ">
        <label
          htmlFor="first_name"
          className="mb-2 text-sm font-medium text-gray-600 dark:text-white">
          {name === "" ? "First Name" : name}
        </label>
        <div className="mb-3 pt-0 justify-start ">
          <input
            onChange={(e) => {
              callback(e);
              setError("")
            }}
            style={{outlineColor:error !== ""? "#ff0000":""}}
            type={type !== null ? type : "text"}
            placeholder="First Name"
            className="px-3 py-3 w-1/4 border-1 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
          />
          <br></br>
          <span className="text-red-500">{ error}</span>
        </div>
      </div>
    </>
  );
}

export default InputControl;
