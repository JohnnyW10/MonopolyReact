import React from "react";
import { useState } from 'react';

export default function Form() {
  const [card, setCard] = useState('')
  const Btns = ['Normalna Karta', 'Koleje', 'Specjalna']

  return(
    <div id="btnsBox">
      {Btns.map(el => <button onClick= {() => setCard(el)} key={el} value={el}>{el}</button>)}
      <CheckCard value={card}/>
    </div>
  );
}

function CheckCard(card) {
  let normalCard = ['Name', 'Cost', 'With one house', 'With two', 'With three', 'With four', 'With hotel']
  let trainCard = ['Name', 'Cost']
  let specialCard = ['Name', 'Rule', 'Pay']

  if(card.value === '') {
    return ''
  } else if (card.value === 'Normalna Karta') {
    return(
      <div class="valueCard">
        <form>
          {normalCard.map(el => <p key={el.indexOf}><label>{el}: </label><input type="text"></input></p>)}
          <button id="addCard">Add Card</button>
        </form>
      </div>
    )
  } else if (card.value === 'Koleje') {
    return(
      <div class="valueCard">
        <form>
          {trainCard.map(el => <p key={el.indexOf}><label>{el}: </label><input type="text"></input></p>)}
          <button id="addCard">Add Card</button>
        </form>
      </div>
    )
  } else if (card.value === 'Specjalna') {
    return(
      <div class="valueCard">
        <form>
          {specialCard.map(el => <p key={el.indexOf}><label>{el}: </label><input type="text"></input></p>)}
          <button id="addCard">Add Card</button>
        </form>
      </div>
    )
  }
}