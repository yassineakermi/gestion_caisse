import React, { useState, useEffect } from 'react'

const DataTable = ({ data, update = false, _delete = false, updateRow=null, deleteRow=null }) => {

  const parseHeader = (data = false) => {
    if (data && data instanceof Array && data.length > 0 && data[0] instanceof Object) {
      Object.keys(data[0])
      return Object.keys(data[0]);
    }
    else
      return [];
  }


  const [header, setHeader] = useState([])
  const [_data, setData] = useState([])

  useEffect(_ => {
    const script = document.createElement("script");
    script.src = 'dist/js/datatable.js';
    script.async = true;
    document.body.appendChild(script);
    setHeader(parseHeader(data));
    setData(data);
    return ()=>{
      document.body.removeChild(script)
    }
  }, [])

  const actionIconsStyle = {
    margin: "5px",
    fontSize: "20px"
  }

  return (

    
      
        (header && header.length > 0) &&


          <table id="example1" className="table table-bordered table-striped">
            <thead>
              <tr>
                {header.map((el, index) => <th key={index}>{el}</th>)}
                {(_delete || update) && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {
                _data.map((el, index) => {
                  return <tr key={index}>
                    {
                      Object.entries(el).map( pair=><td>{pair[1]}</td>)
                    }
                    {(_delete || update) &&
                      <td style={{ textAlign: "center" }}>
                        {update && <i onClick={(e)=>updateRow ? updateRow(e,el):undefined} style={{ ...actionIconsStyle,cursor:"pointer", color: "#ffc107" }} className='fa fa-pen-to-square'></i>}
                        {_delete && <i onClick={(e)=>deleteRow ? deleteRow(el.id) : undefined} style={{ ...actionIconsStyle,cursor:"pointer", color: "#dc3545" }} className='fa fa-circle-minus'></i>}

                      </td>
                    }
                  </tr>
                })

              }

            </tbody>
            <tfoot>

              <tr>
                {header.map((el, index) => <th key={index} >{el}</th>)}
                {(_delete || update) && <th>Actions</th>}
              </tr>

            </tfoot>
          </table>
      
  )
}

export default DataTable