import React, { useContext } from "react";
import Gauge from "react-svg-gauge";

import { ResultsContext, LoadingContext } from "../Store";

const Results = () => {
  const results = useContext(ResultsContext).state;
  const isLoading = useContext(LoadingContext).state;

  const renderResults = () => {
    const location = results.location;
    return (
      <div className="results fadeInUp text-center">
        <h2>{location.name}</h2>
        <p>{location.address}</p>
        <p className="info">{location.info}</p>
        <div>
          <div className="row">
            <Gauge
              value={results.waterLevel}
              width={200}
              height={160}
              label="Water Level (ft)"
              max={10}
              color={"#B9E4D0"}
              topLabelStyle={{
                fontSize: "25px",
                fontFamily: "Amatic SC",
                fontWeight: "700",
                color: "#055A5B"
              }}
              valueLabelStyle={{ fontFamily: "Raleway" }}
              minMaxLabelStyle={{ fontFamily: "Raleway" }}
            />
            <Gauge
              value={results.discharge}
              width={200}
              height={160}
              label="Water Flow (ft3/s)"
              max={45}
              color={"#F7D385"}
              topLabelStyle={{
                fontSize: "25px",
                fontFamily: "Amatic SC",
                fontWeight: "700",
                color: "#055A5B"
              }}
              valueLabelStyle={{ fontFamily: "Raleway" }}
              minMaxLabelStyle={{ fontFamily: "Raleway" }}
            />
          </div>
          <div className="row">
            <p>
              {results.levelCondition} {results.flowCondition}
            </p>
            <p>{results.overallCondition}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderLoading = () => {
    return (
      <div className="loading">
        <div className="droplet" />
        <div className="droplet" />
        <div className="droplet" />
      </div>
    );
  };

  return (
    <div>
      {isLoading && renderLoading()}
      {results && renderResults()}
    </div>
  );
};

export default Results;
