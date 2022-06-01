import React from "react";

export default function Navigation() {
  const naviData = {
    name: 'Monopoly',
    rules: 'This is the aplication that simulate monopoly in a certain way'
  }

  return(
    <div id="navigation">
      <h2>{naviData.name}</h2>
      <p>{naviData.rules}</p>
    </div>
  );
}