import React, { useState } from 'react'

const SimpleInputField = ({ label="Your input here...",value="fuck", setParentState=null, id=null, type = "text", isRequired = true, placeholder = "Enter ...", step = 1, pattern = null, min = 0, max = 9999999, size = 30 }) => {

  const [content, setContent] = useState("");
  const [validation, setValidation] = useState("");

  function generateRandomInteger(max) {
    let id = Math.floor(Math.random() * max) + 1;
    while(document.getElementById(id.toString())){
      id = Math.floor(Math.random() * max) + 1;
    }
    return id
}


  const handleChange = (e) => {
    if(setParentState && setParentState instanceof Function)
      setParentState(e,e.target.value)

    if (e.target.checkValidity()){
      setValidation("is-valid")
    }
    else
      setValidation("is-invalid")
  }
  return (
    <div className="form-group">
      <label className="col-form-label" htmlFor={id != null ? id : generateRandomInteger(99999999)}>{label}</label>
      <input type={type} className={`form-control ${validation}`} id={id} placeholder={placeholder} step={type === "number" && step} size={size} required={isRequired} value={value} min={type === "number" ? min : undefined} max={type === "number" ? max : undefined} pattern={pattern ? pattern : undefined} onChange={handleChange} />
    </div>
  )
}

export default SimpleInputField