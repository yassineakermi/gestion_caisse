import React, {  useState } from 'react'

const SelectInput = ({ label = "select an option", id = null, placeholder = "Select an option", setParentState = null, data = null, isRequired = true, style = null }) => {


    function generateRandomInteger(max) {
        let id = Math.floor(Math.random() * max) + 1;
        while (document.getElementById(id.toString())) {
            id = Math.floor(Math.random() * max) + 1;
        }
        return id
    }

    const [content, setContent] = useState("")
    const [validation, setValidation] = useState("")
    const _id = id ? id : generateRandomInteger(99999999);

    const validateAndDisplay = (data) => {
        if (data && data instanceof Array)
            return data.reduce((filtered, option, index) => {
                if (typeof option === 'object')
                    filtered.push(<option key={index} value={option.value}>{option.display.toString()}</option>)
                return filtered
            }, [])
    }
    const handleChange = (e) => {
        setContent(e.target.value)
        if (e.target.checkValidity()) {
            if (setParentState && setParentState instanceof Function)
                setParentState(e,e.target.value)
            setValidation("is-valid")
        }
        else
            setValidation("is-invalid")
    }


    return (
        <div className="form-group">
            <label>{label}</label>
            <select className={`form-control ${validation}`} aria-label=".form-select-lg example"
                id={_id}
                data-placeholder={placeholder}
                style={style ? style : { width: "100%" }}
                required={isRequired}
                value={content}
                onChange={handleChange}
            >
                {
                    data === null ? <option>No choice is available</option> : validateAndDisplay(data)

                }
            </select>
        </div>

    )
}

export default SelectInput