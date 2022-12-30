import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Link } from "react-router-dom";
import "./Documents.css";

const url = " https://arxiv.org/pdf/2212.07931.pdf";

function ThirdDocument() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  function show() {
    document.getElementById("HiddenTitle").style.height = "400px";
    document.getElementById("HiddenTitle").style.display = "block";
    // document.getElementById('HiddenTitle').style.display="none"
  }
  function showAuthor() {
    document.getElementById("HiddenAuthor").style.height = "100px";
    document.getElementById("HiddenAuthor").style.display = "block";
    // document.getElementById('HiddenTitle').style.display="none"
  }
  return (
    <div>
      <div style={{ display: "none" }} id="title__annotation "></div>
      <div className="main">
        <div className="left">
          <Link to="/">
            <button  className="btn btn-outline-secondary">Home</button>
          </Link>

          <h1 className="main__title">
            <b>Lable</b>
          </h1>
          <div className="main__buttons">
            <button onClick={show} className="title__button">
              Title
            </button>
            <button onClick={showAuthor} className="author__button">
              Author
            </button>
          </div>
          <div>
            <h1 className="title__box">
              <b>Boxes</b>
            </h1>
            <div className="All__hidden" id="All__hidden">
              <div>
                <p style={{ display: "none" }} id="HiddenTitle">
                  Using Natural Language Processing to Predict Costume Core
                  Vocabulary of Historical Artifacts
                </p>
              </div>
              <div className="hidden__authors">
                <p style={{ display: "none" }} id="HiddenAuthor">
                  Madhuvanti Muralikrishnan <br /> Amr Hilal <br /> Chreston
                  Miller <br /> Dina Smith-Glaviana
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Document
            className="document"
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default ThirdDocument;
