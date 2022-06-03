import React from "react";
import { useState } from 'react';
import createCard from "./createCard";

export default function Form() {
  const [card, setCard] = useState('')
  const Btns = ['Normal', 'TrainStation', 'Specjal']

  return(
    <div id="btnsBox">
      {Btns.map(el => <button onClick= {() => setCard(el)} key={el} value={el}>{el}</button>)}
      <CheckCard value={card}/>
    </div>
  );
}

function CheckCard(card) {
  let normalCard = ['Name', 'Cost', 'one-house', 'two-house', 'three-house', 'four-house', 'Hotel']
  let trainCard = ['Name', 'Cost']
  let specialCard = ['Name', 'Rule', 'Pay']
  let cardd = card.value

  if(card.value === '') {
    return ''
  } else if (card.value === 'Normal') {
    return(
      <div class="valueCard">
        <form>
          {normalCard.map(el => <p key={el.indexOf}><label>{el}: </label><input id={el} type="text"></input></p>)}
          <button class="addCard" onClick={createCard(cardd, normalCard)}>Add Card</button>
        </form>
      </div>
    )
  } else if (card.value === 'TrainStation') {
    return(
      <div class="valueCard">
        <form>
          {trainCard.map(el => <p key={el.indexOf}><label>{el}: </label><input type="text"></input></p>)}
          <button class="addCard">Add Card</button>
        </form>
      </div>
    )
  } else if (card.value === 'Specjal') {
    return(
      <div class="valueCard">
        <form>
          {specialCard.map(el => <p key={el.indexOf}><label>{el}: </label><input type="text"></input></p>)}
          <button class="addCard">Add Card</button>
        </form>
      </div>
    )
  }
}