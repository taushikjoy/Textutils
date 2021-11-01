import React, { useState } from "react";

function Form(props) {
  const [text, setText] = useState("Enter text here");

  let handleUpclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  let handleUpchange = (event) => {
    setText(event.target.value);
  };

  //

  // const divStyle = {
  //   color: "blue",
  // };

  // // function HelloWorldComponent() {
  // //   return <div style={divStyle}>Hello World!</div>;
  // // }

  // //
  // let changeFont = () => {
  //   return <div style={divStyle}>{text}T</div>;
  // };

  return (
    <>
      <div className="container my-5 w-50">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleUpchange}
          ></textarea>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleUpclick}>
        convert to UPPERCASE
      </button>
      {/* <button className="btn btn-primary" onClick={changeFont}>
        convert to italic
      </button> */}
    </>
  );
}

export default Form;
