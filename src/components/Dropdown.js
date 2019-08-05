import React, {useContext} from "react";

import locations from "../locations.json";

import helpers from "../helpers";

import { ResultsContext, LoadingContext } from '../Store';

export default () => {
  const setIsLoading = useContext(LoadingContext).setState;

  const setResults = useContext(ResultsContext).setState;

  const renderLocations = () => {
    const locationKeys = Object.keys(locations);
    return locationKeys.map((location, i) => (
      <option key={i} value={location}>
        {locations[location].name}
      </option>
    ));
  };

  const handleChange = e => {
    const locationID = e.target.value;
    setIsLoading(true);
    helpers.getWaterData(locationID)
    .then(response => {
      setIsLoading(false);
      setResults(response);
    })
    .catch(error => {
      setIsLoading(false);
      setResults({error});
    })
    
  }

  return (
    <div>
      <form>
        <select onChange={handleChange}>
          {renderLocations()}
        </select>
      </form>
    </div>
    
  );
};
