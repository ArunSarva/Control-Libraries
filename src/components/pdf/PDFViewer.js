import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Snackbar from "../snackBar/SnackBar";
import "./PdfViewers.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PdfViewer(file) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [show, setShow] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const openSnackbar = () => {
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setShow(true);
  }
  function onDocumentLoadError({ numPages }) {
    openSnackbar();
  }
  return (
    <div>
      <div className="pdf-viewer">
        <Document
          file={file.file}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        {show && (
          <div className="PdfControls">
            <button
              className="PdfControlsButton"
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              <AiOutlineLeft />
            </button>
            <p className="mt-2">
              {pageNumber} of {numPages}
            </p>
            <button
              className="PdfControlsButton"
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              <AiOutlineRight />
            </button>
          </div>
        )}
      </div>
      {snackbarOpen && (
        <Snackbar
          bgColor={"red"}
          message="please choose PDF Files"
          duration={3000}
          onClose={closeSnackbar}
        />
      )}
    </div>
  );
}

export default PdfViewer;
