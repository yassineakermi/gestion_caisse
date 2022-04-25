import React,{useState} from 'react'

const SimpleInputField = ({label,setParentState,id,type="text",isRequired=true,placeholder="Enter ...",step=1,pattern="*",min=0,max=9999999,size=30}) => {

    const [content,setContent] = useState("");
    const [validation, setValidation] = useState("");
    const handleInput = (e)=>{
        setContent(e.target.value)
        if(e.target.checkValidity())
            setValidation("is-valid")
        else
            setValidation("is-invalid")
    }
  return (
<div className="form-group">
  <label className="col-form-label" htmlFor={id}>{label}</label>
  <input type={type} className={`form-control ${validation}`} id={id} placeholder={placeholder} step={type==="number" && step} size={size} required={isRequired} value={content} min={type==="number" && min} max={type==="number" && max}  pattern={pattern} onChange={handleInput}/>
</div>
  )
}

export default SimpleInputField