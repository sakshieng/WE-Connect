import React from "react";
import queryData from "./data";
import "../../style/Queries.css";
const Accordionn = () => {
  return (
    <div className="accordion" id="accordionExample">
      {queryData.map((item) => {
        return (
          <div className="accordion-item border-0">
            <h2 className="accordion-headerborder-0" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {item.que}
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Answer</strong>
                <p>{item.ans}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordionn;
