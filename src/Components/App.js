import React, { useState } from "react";

export default function App() {
  const [cards, serCards] = useState([
    {name: "", url: ""},
    {name: "", url: ""},
    {name: "", url: ""},
    {name: "", url: ""},
    {name: "", url: ""},
    {name: "", url: ""},
    {name: "", url: ""},
    {name: "", url: ""}
  ])
  const [selected, setSelected] = useState([])


  return (
    <div className="App">
      <div>Hello</div>
    </div>
  );
}

