import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item, setItems] = useState([]);
  console.log(item);

  function addItems(newValue) {
    setItems((preValue) => {
      return [...preValue, newValue];
    });
    console.log(newValue);
  }
  
  function deletItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItems={addItems} />
      {item.map((valueIN, index) => (
        <Note
          key={index}
          id={index}
          title={valueIN.title}
          content={valueIN.content}
          deletItem={deletItem}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
