import React from "react";
import Memory from "../Assets/memory.png";
import Response from "../Assets/response.png";


const tests = () => {
return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Soft Skills Test</h1>
        <p className="primary-text">
          These tests helps you test your soft skills like attention to detial, response time, problem solving, thought process skills.
        </p>
      </div>
      <div className="work-section-bottom">
        <div className="work-section-info" >
            <div className="info-boxes-img-container">
              <img src={Memory} alt="" />
            </div>
            <h2>{"Memory"}</h2>
            <p>{"Helps to test how good is your memory & attention to detail."}</p>
          </div>
          <div className="work-section-info" >
            <div className="info-boxes-img-container">
              <img src={Response} alt="" />
            </div>
            <h2>{"Response"}</h2>
            <p>{"Helps to test your response time & attention to detail."}</p>

            
          </div>
      </div>
    </div>
  );
};

export default tests;
