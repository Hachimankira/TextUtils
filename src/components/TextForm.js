import React, {useState} from 'react'


export default function TextForm(props) {
const handleUpClick = ()=>{
  let newText=text.toUpperCase();
  setText(newText)
}
const handleDownClick = ()=>{
  let newText=text.toLowerCase();
  setText(newText)
}
const handleOnChange = (event)=>{
  setText(event.target.value)
}

  const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
      <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        {/* <button type="button" className="btn btn-outline-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary' onClick={handleDownClick}> Convert to LowerCase</button> */}
        <div className="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" className="btn btn-outline-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button type="button" className="btn btn-outline-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
           {/* <button type="button" className="btn btn-primary">Right</button> */}
        </div>
    </div>
    
    <div className='container'>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div> 

    </>
  )
}