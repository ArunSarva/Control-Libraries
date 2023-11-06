import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdfFile from "../../assets/pdf/sample.pdf";
import "./PdfViewers.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PdfViewer(file) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="pdf-viewer">
      <Document file={file.file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="PdfControls">
        <button
          className="PdfControlsButton"
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          <AiOutlineLeft />
        </button>
        <p>
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
    </div>
  );
}

export default PdfViewer;
