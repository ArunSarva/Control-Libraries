import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { RxZoomOut, RxZoomIn } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import {
  MdOutlineNavigateNext,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import "./popup.css";

export default function BasicModal(props: any) {
  const imageRef = useRef(null);
  const { show, title, img, imageList, setshow } = props;
  const handleClose = () => setshow(false);
  const [height, setHeight] = React.useState(50);

  const [imageIndex, setimageIndex] = React.useState(0);
  useEffect(() => {
    setHeight(50);
    setimageIndex(img);
  }, [img]);
  const style = {
    // width: 500,
  };

  return (
    <div>
      <Modal
        className="imageContainer"
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="imagecontainer">
          <div onClick={handleClose} className="modelCloseButton">
            <AiOutlineClose className="closeButton" />
          </div>
          <img
            className="imageHolder"
            ref={imageRef}
            width={`${height}%`}
            src={`${imageList[imageIndex]?.img}`}
            srcSet={`${imageList[imageIndex]?.img}`}
            alt={title}
            loading="lazy"
          />
          <div className="imagecontroller flex flex-row text-cyan-50 justify-evenly cursor-pointer ">
            <div
              className="controllerDiv"
              onClick={() => {
                imageIndex > 0 && setimageIndex(imageIndex - 1);
                setHeight(50);
              }}
            >
              <MdOutlineArrowBackIosNew className="imageControlButton" />
            </div>

            <div
              className="controllerDiv"
              onClick={() => {
                height > 10 && setHeight(height - 10);
              }}
            >
              <RxZoomOut className="imageControlButton" />
            </div>
            <div
              className="controllerDiv"
              onClick={() => {
                height < 100 && setHeight(height + 10);
              }}
            >
              <RxZoomIn className="imageControlButton" />
            </div>
            <div
              className="controllerDiv"
              onClick={() => {
                imageIndex < imageList.length - 1 &&
                  setimageIndex(imageIndex + 1);
                setHeight(50);
              }}
            >
              <MdOutlineNavigateNext className="imageControlButton" />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
