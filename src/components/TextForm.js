import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState('');
  

  function handleUpClick() {
    // console.log("heey there");
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    // eslint-disable-next-line no-unused-expressions
    props.showalert("converted to uppercase","success");
  }
  function handleloClick() {
    // console.log("heey there");
    const upperCaseText = text.toLowerCase();
    setText(upperCaseText);
    props.showalert("converted to lowercase","success");
  }
  function handleclClick() {
    // console.log("heey there");
    const upperCaseText = "";
    setText(upperCaseText);
    props.showalert("cleared","success");
  }
  function handlecpClick() {
   var tex=document.getElementById('myBox');
    tex.select();
    navigator.clipboard.writeText(tex.value);
    props.showalert("copied to clipboard","success");
  }
  function handlespcClick() {
    let newt=text.split(/[ ]+/);
    setText(newt.join(" "));
    props.showalert("spaces are corrected","success");
   }
  function handleonChange(event) {
    const textt = event.target.value;
    setText(textt);
  }



  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1 >Enter text to analyse</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" name="myBox" rows="8"  onChange={handleonChange} style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}></textarea>
      </div>
      <button className='btn btn-primary mx-2' onClick={handleUpClick}>convert to uppercase</button>
      <button className='btn btn-primary mx-2' onClick={handleloClick}>convert to Lowercase</button>
      <button className='btn btn-primary mx-2' onClick={handleclClick}>clear</button>
      <button className='btn btn-primary mx-2' onClick={handlecpClick}>copy text</button>
      <button className='btn btn-primary mx-2' onClick={handlespcClick}>specify</button>
    </div>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
      <h1>your text summary</h1>
      <p> {text.split(" ").length-1} word and {text.length}characters</p>
      <p> {0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"enter something in above box to preview it here"}</p>
    </div>
    </>
  )
}
