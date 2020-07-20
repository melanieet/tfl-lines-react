import React, { useState, useEffect } from "react";
import LineSelector from "./LineSelector";

function ModeSelector() {
  const [modes, setModes] = useState([]);
  const [selectedMode, setSelectedMode] = useState(false);

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((response) => response.json())
      .then((data) => {
        setModes(data);
      });
  }, [selectedMode]);

  function handleChange(event) {
    let selectedMode = event.target.value;
    setSelectedMode(selectedMode);
  }

  return (
    <div>
      <div className="Mode-selector">
        <select onChange={handleChange}>
          <option value="">Choose a mode of transport...</option>
          {modes.map((mode, index) => {
            return (
              <option key={index} value={mode.modeName}>
                {mode.modeName}
              </option>
            );
          })}
        </select>
        <h3>You have selected: {selectedMode}</h3>
      </div>
      <div className="Line-selector">
        <LineSelector selectedMode={selectedMode} />
      </div>
    </div>
  );
}

export default ModeSelector;
