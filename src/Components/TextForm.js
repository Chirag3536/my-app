import React, { useState } from "react";
import copy from "copy-to-clipboard";

export default function TextForm(props) {

    const handleOnChange = (event)=>{
        // console.log("Onchange called")
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        // console.log("Clicked upperCse");
        if(text.length > 0){
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Text changed to UpperCase", "success")
        }
        else{
            props.showAlert("Please enter some text", "warning")
        }
        
    }

    const handleLowClick = ()=>{
        // console.log("toLowerClick called");
        if(text.length > 0){
            setText(text.toLowerCase());
            props.showAlert("Text changed to LowerCase", "success")
        }
        else{
            props.showAlert("Please enter some text", "warning")
        }
        
    }

    const handleClearClick = ()=>{
        if(text.length > 0){
            let rs = window.confirm("Do you want to clear")
            if(rs) setText('')
        }
        else{
            props.showAlert("Please enter some text", "warning")
        }
    }

    const handleCopyToClipboard = ()=>{
        if(text.length > 0){
            copy(text)
            props.showAlert("Text Copied Successfully!! ", "success")
        }
        else{
            props.showAlert("Please enter some text", "warning")
        }
        // props.showAlert("Copied to clipboard")
    }

    const [text, setText] = useState(""); 

  return (
    <div>
      <div className="form container my-2" style={{color : props.mode === 'light' ? 'black':'white'}}>
        <h1>Write your text below to analyze</h1>
        <textarea
          className="form-control textArea"
          placeholder="Enter your text here..."
          id="floatingTextarea2"
          onChange={handleOnChange}
          value={text}
          style={{color : props.mode === 'light' ? 'black':'white', backgroundColor: props.mode==='light'?'white':'#3d4155'}}
        ></textarea>
        <button className=" btn btn-primary my-3 mx-1" onClick={handleUpClick}>ToUpperCase</button>
        <button className=" btn btn-primary my-3 mx-1" onClick={handleLowClick}>ToLowerCase</button>
        <button className=" btn btn-primary my-3 mx-1" onClick={handleClearClick}>ClearText</button>
        <button className=" btn btn-primary my-3 mx-1" onClick={handleCopyToClipboard}>CopyToClipboard</button>
      </div>
      <div className="container summary my-4" style={{color : props.mode === 'light' ? 'black':'white', backgroundColor: props.mode==='light'?'white':'#3d4155'}}>
        <h2>Your Summary</h2>
        Total words :- {text.split(" ").filter(word => word !== '').length} <br />
        Total characters :- {text.length} <br />
        Total time required to read :- {text.split(" ").filter(word => word !== '').length / 125} minutes
      </div>
    </div>
  );
}
