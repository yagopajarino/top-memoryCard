import React, { useState, useEffect } from "react";
import uniqid from 'uniqid'
import amadeo from "../static/amadeo.jpeg"
import beto from "../static/beto.jpeg"
import burro from "../static/burro.jpeg"
import enzo from "../static/enzo.jpeg"
import labruna from "../static/labruna.jpeg"
import leon from "../static/leon.jpeg"
import mostaza from "../static/mostaza.jpeg"
import muñe from "../static/muñe.jpeg"
import pinino from "../static/pinino.jpeg"
import ramon from "../static/ramon.jpeg"

export default function App() {
  const [cards, setCards] = useState([
    {id: 0, name: "Amadeo Carrizo", url: amadeo},
    {id: 1, name: "Norberto Alonso", url: beto},
    {id: 2, name: "Ariel Ortega", url: burro},
    {id: 3, name: "Enzo Francescoli", url: enzo},
    {id: 4, name: "Ángel Labruna", url: labruna},
    {id: 5, name: "Leonardo Ponzio", url: leon},
    {id: 6, name: "Reinaldo Merlo", url: mostaza},
    {id: 7, name: "Marcelo Gallardo", url: muñe},
    {id: 8, name: "Oscar Más", url: pinino},
    {id: 9, name: "Ramón Díaz", url: ramon}
  ])
  const [selected, setSelected] = useState([])
  const [puntaje, setPuntaje] = useState(0)
  const [best, setBest] = useState(0)

  function shuffle(array) {
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  useEffect(() => {
    shuffle(cards)
  }, [puntaje])

  function handleClick(e) {
    setPuntaje(puntaje + 1)
    let node = e.target
    let id
    if(node.nodeName !== "DIV"){
      id = node.parentNode.id
    }
    else {id = node.id}
    console.log(id)
    if (selected.some((element) => element === id)) {
      setSelected([])
      if (puntaje > best) {
        setBest(puntaje)
      }
      setPuntaje(0)
    }
    else {
      setSelected(selected.concat(id))
    }
  }

  const tiles = cards.map((item) => 
    <div id={item.id} onClick={handleClick} className="tile" key={uniqid()}>
      <img src={item.url}></img>
      <span>{item.name}</span>
    </div>
  )

  function logSelected(){
    console.log(selected)
  }

  return (
    <div className="App">
      <div className="titulo">River Memotest</div>
      <p>Selecciona las imágenes, pero sin repetir</p>
      <div className="puntajes">
        <div className="score">
          <span>Puntaje: {puntaje}</span>
        </div>
        <div className="mejor">
          <span>Mejor puntaje: {best}</span>
        </div>
      </div>
      <div className="tilesContainer">
        {tiles}
      </div>
    </div>
  );
}

