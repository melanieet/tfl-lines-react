import React, { useState, useEffect } from "react";
import Routes from "./Routes";

function LineSelector({ selectedMode }) {
  const [lines, setLines] = useState([]);
  const [selectedLine, setSelectedLine] = useState(false);

  useEffect(() => {
    if (selectedMode) {
      fetch(`https://api.tfl.gov.uk/Line/Mode/${selectedMode}`)
        .then((response) => response.json())
        .then((data) => setLines(data));
    }
  }, [selectedMode]);

  function handleChange(event) {
    let selectedLine = event.target.value;
    setSelectedLine(selectedLine);
  }

  return (
    <div>
      <div>
        <select onChange={handleChange}>
          <option>Select a line...</option>
          {lines.map((line, index) => {
            return (
              <option key={index} value={line.id}>
                {line.id}
              </option>
            );
          })}
        </select>

        <h3>Line selected: {selectedLine}</h3>
      </div>
      <div className="Routes">
        <Routes selectedLine={selectedLine} />
      </div>
    </div>
  );
}

export default LineSelector;
