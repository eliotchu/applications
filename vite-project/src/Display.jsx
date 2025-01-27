import { useState } from "react";
import './Display.css'

function Display(problem, difficulty, dataStructures, viewSolution) {
  const [pageNumber, setPageNumber] = useState(1);
  const [array, displayArray] = useState(0)
    
  // function displayArray(){
  //   if(array.length > 0){

  //   }
  // }

  function handleIncrement(direction) {
    if (direction === "next") {
      setPageNumber(pageNumber + 1);
    } else if (direction === "back") {
      if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
      }
    }
  }

  return (
    <>
      <div class="display">
        
      </div>
      <div class="page">
      <button onClick={() => handleIncrement("back")} id="back" disabled={pageNumber === 1}>
        &lt; Back
      </button>
      <button onClick={() => handleIncrement("next")} id="next">
        Next &gt;
      </button>
      <p>Current Page: {pageNumber}</p>
      </div>
    </>
  );
}

export default Display;
