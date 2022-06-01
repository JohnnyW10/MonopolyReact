import React from "react";

export default function Form() {


  return(
    <div>
      <DisplayBtn />
    </div>
  );
}

function DisplayBtn() {
  const Btns = ['Normalna Karta', 'Koleje', 'Specjalna']

  return(
    <div id="btnsBox">
      {Btns.map(el => <button key={el} value={el}>{el}</button>)}
    </div>
  )
}
