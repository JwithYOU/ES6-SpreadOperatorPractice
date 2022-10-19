import React, { useState } from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  const [inputText, setInputText] = useState("");
  const [item, setItem] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    // useState에 있는 set함수를 사용할 때 아무 매개변수(여기서는 prevValue)를 넣으면 해당 변수(여기서는 item)가 들어간다
    setItem((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={inputText} type="text" />
        <button>
          <span value="çdd" onClick={addItem}>
            Add
          </span>
        </button>
      </div>
      <div>
        {/* map 함수 써야함 */}
        <ul>
          {/* 처음에 map 함수에서 에러가 뜬건 setItem에 아무것도 넣지 않아서 (undefined 이니까) */}
          {item.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
