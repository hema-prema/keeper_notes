import React, { useState } from "react";

function CreateArea(props) {
  const [newValue, setValue] = useState({
    title: "",
    content: ""
  });
  function hancleChange(event) {
    const { name, value } = event.target;

    setValue((preValue) => ({
      ...preValue,
      [name]: value
    }));
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={hancleChange}
          value={newValue.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={hancleChange}
          value={newValue.content}
        />
        <button
          onClick={(event) => {
            props.addItems(newValue);
            setValue({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
