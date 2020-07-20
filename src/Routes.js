import React, { useState, useEffect } from "react";

function Routes({ selectedLine }) {
  const [route, setRoute] = useState([]);

  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/${selectedLine}/Route`)
      .then((response) => response.json())
      .then((data) => setRoute(data));
  }, [selectedLine]);

  return (
    <div className="Route-section">
      <div className="Route">
        <p className="Line">Start of line:</p>
        <p>{route.routeSections && route.routeSections[0].originationName}</p>
      </div>

      <div className="Arrow">
        <img src="/./icons8-right-arrow-24.png" alt="Arrow icon"></img>
      </div>

      <div className="Route">
        <p className="Line">End of line:</p>
        <p>{route.routeSections && route.routeSections[0].destinationName}</p>
      </div>
    </div>
  );
}

export default Routes;
