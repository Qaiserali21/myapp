import React, { useState } from 'react'
// import Alert from './Alert';
export default function Textbox(props) {
  // logic for updating the textbox text into upper case  - using arrow function as it binds 'this' automatically in functional components
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    if (newtext !== '') {
      props.showalert('Text converted to Upper Case', 'success');
    }
    else{
      props.showalert('Enter new text', 'warning');
    }
  }
 //  logic for updating the textbox text into Lower case  - using arrow function as it binds 'this' automatically in functional components
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    if (newtext !== '') {
      props.showalert('Text converted to Lower Case', 'success');
    }
    else{
      props.showalert('Enter new text', 'warning');
    }
  }
  // funtion to handle the textbox text

  const handleOnChange = (e) => {
    setText(e.target.value)
  }
  // funtion to clear text in textbox

  const clearText = () => {
    let newtext = '';
    setText(newtext);

    if (newtext !== '') {
      props.showalert('Text clear', 'success');
    }
    else{
      props.showalert('Enter new text', 'warning');
    }
  }

  const handleExtraSpaces=() => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    if (newtext.join(" ").trim() !== '') {
      props.showalert('Extra Spaces Remove', 'success');
    }
    else{
      props.showalert('Enter new text', 'warning');
    }
    // props.showalert('Text Extra spaces removed', 'Success');
  }

  const handleCapClick = () => {
    let newtext = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    setText(newtext);
    if (newtext !== '') {
      props.showalert('Text has been Capitalized', 'success');
    }
    else{
      props.showalert('Enter new text', 'warning');
    } 
  }

  const handleInvClick = () => {
    let newtext = text.split(' ').map(word => word.charAt(0).toLowerCase() + word.slice(1).toUpperCase()).join(' ');
    setText(newtext);
    if (newtext !== '') {
      props.showalert('Text has been Inversible', 'success');
    }
    else{
      props.showalert('Enter new text', 'warning');
    }
  }

  const handleClipClick = () => {
    navigator.clipboard.writeText(text);
    props.showalert('Text has been copy to clipboard', 'success');
  }

  const handleDownClick = () => {
    const blob = new Blob([text], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'text_analysis.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    props.showalert('Text file Downloaded', 'success');
  }
  // const [alert, setAlert] = useState(null);
  // const showalert = (message, type) => {
  //   setAlert({ message, type });
  //   setTimeout(() => setAlert(null), 3000);
  // };

  // use state to update the text when the text changes
  const [text, setText] = useState('Enter text here')

  let lineCount = text.trim().split(/\n+/).length;
  if (text !== '') {
    lineCount =text.trim().split(/\n+/).length;
  }
  else{
    lineCount = 0;
  }

  return (
    <>
      <div className='container'style={{color: props.mode=== 'dark'? 'white':'#042743'}}>
      {/* <Alert alert={alert}/> */}
        <h1>{props.headings}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="text" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'? '#042743':'white', color: props.mode=== 'dark'? 'white': '#042743'}}  rows="8"></textarea>
        </div>
        <button className="btn btn-primary me-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary me-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary me-2" onClick={handleCapClick}>Capitalize Case</button>
        <button className="btn btn-primary me-2" onClick={handleInvClick}>inVERSE CaSe</button>
        <button className="btn btn-primary me-2" onClick={handleClipClick}>Copy to ClipBoard</button>
        <button className="btn btn-primary me-2" onClick={handleDownClick}>Download Text</button>
        <button className="btn btn-primary me-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary me-2" onClick={clearText}>Clear Text</button>
     </div>
      <div className="container my-3" style={{color: props.mode=== 'dark'? 'white':'#042743'}}>
        <h2>Text Analysis</h2>
        <p>Characters: {text.trim().length}  | Words: {(text.match(/\b\w+\b/g) || []).length} | Sentence Count: {text.match(/[^\\.!?]*[\\.!?]/g)?.length || 0} | Line Count: {lineCount}</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read Text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text above in the textbox to preview somthing here"}</p>
      </div>
    </>
  )
}
