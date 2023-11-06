/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Modal from "../modal";
import { SlOptionsVertical } from "react-icons/sl";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Table(props: {
  rowdata: any;
  coloumName: string[];
  CheckBox: boolean;
  mapper: any;
  CheckBoxKey: string;
}) {
  const { rowdata, coloumName, CheckBox, mapper, CheckBoxKey } = props;
  const [selected, setSelected] = React.useState<string[]>([]);
  const [coloumData, setcoloumData] = React.useState<string[]>([]);
  const [mapperData, setMapperData] = React.useState<string[]>([]);
  const [tabledata, setTableData] = useState([]);
  const [localCheckBoxKey, setLocalCheckBoxKey] = useState("");
  const [localCheckBox, setLocalcheckBox] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [modalData, setmodalData] = useState({});
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const [showOption, setShowOption] = useState(false);
  useEffect(() => {
    setcoloumData(coloumName.length === 0 ? loaclColoumNames : coloumName);
    setTableData(rowdata.length === 0 ? localTableData : rowdata);
    setMapperData(mapper.length === 0 ? localMapper : mapper);
    setLocalCheckBoxKey(CheckBoxKey === "" ? "Productname" : CheckBoxKey);
    setLocalcheckBox(CheckBox === undefined ? true : CheckBox);
  }, []);
  const localTableData = [
    {
      Productname: "Apple iMac 27",
      Color: "Black",
      Category: "Work",
      price: 25000,
      action: "edit",
    },
    {
      Productname: "Apple iMac 28",
      Color: "Silver",
      Category: "Game",
      price: 50000,
      action: "edit",
    },
  ];
  const localMapper = ["Productname", "Color", "Category", "price", "action"];
  const loaclColoumNames = [
    "Product name",
    "Color",
    "Category",
    "price",
    "action",
  ];

  const handleClick = (
    name: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected as string[], name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat((selected as string[]).slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat((selected as string[]).slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        (selected as string[]).slice(0, selectedIndex),
        (selected as string[]).slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  // function isSelected(name: string) {
  //   return selected.indexOf(name) !== -1;
  // }

  function handleSelectAllClick(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      const newSelecteds = tabledata.map(
        (name: { [x: string]: any }) => name[localCheckBoxKey] as string
      );
      setSelected(newSelecteds);
      return;
    } else {
      setSelected([]);
    }
  }

  function modalBody(props: any) {
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
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-slate-500 text-lg leading-relaxed">
              <table className="min-w-full text-left text-sm font-light">
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      Product Name
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {props.Productname}
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      Color
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {props.Color}
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      Category
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {props.Category}
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      Price
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {props.price}
                    </td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
          {/* footer */}
          <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {/* for feature enhancement (images)*/}
        {/* <div className="pb-4 bg-white dark:bg-gray-900">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div> */}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {localCheckBox && (
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      onChange={(e) => {
                        handleSelectAllClick(e);
                      }}
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
              )}
              {coloumData.map((item, index) => {
                return (
                  <th key={index} scope="col" className="px-6 py-4">
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tabledata.map(
              (
                row: {
                  [x: string]:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | null
                    | undefined;
                },
                index: React.Key | null | undefined
              ) => {
                // const isItemSelected = isSelected(
                //   row[localCheckBoxKey] as string
                // );
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={index}
                  >
                    {localCheckBox && (
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-3"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            // checked={isItemSelected}
                            onClick={(e) => {
                              handleClick(
                                row[localCheckBoxKey] as string,
                                e as React.MouseEvent<
                                  HTMLButtonElement,
                                  MouseEvent
                                >
                              );
                            }}
                          />
                          <label htmlFor="checkbox-table-3" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                    )}
                    {mapperData.map((key: string, index: number) => {
                      return (
                        <td key={index} className="px-6 py-4">
                          {key === "action" ? (
                            <div className="flex flex-col w">
                              <div>
                                <Button
                                  id="composition-menu"
                                  aria-controls={
                                    open ? "demo-positioned-menu" : undefined
                                  }
                                  aria-haspopup="true"
                                  aria-expanded={open ? "true" : undefined}
                                  onClick={handleMenuClick}
                                >
                                  <SlOptionsVertical />
                                </Button>
                                <Menu
                                  id="composition-menu"
                                  aria-labelledby="composition-menu"
                                  anchorEl={anchorEl}
                                  open={open}
                                  onClose={handleClose}
                                  anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                  }}
                                  transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                  }}
                                >
                                  <MenuItem
                                    onClick={() => {
                                      handleClose();
                                      setmodalData(row);
                                      setShowModal(true);
                                    }}
                                  >
                                    Show Details
                                  </MenuItem>
                                </Menu>
                              </div>
                            </div>
                          ) : (
                            <div>{row[key]}</div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
      <Modal showModal={showModal} children={modalBody(modalData)} />
    </>
  );
}

export default Table;
