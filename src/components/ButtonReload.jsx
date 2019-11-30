import React from 'react'

const ButtonReload = (props) => {

    return(
        <React.Fragment>
        <button onClick={props.refreshPage} className="btn btn-outline-warning btn-lg ml-3">Limpiar</button>
        </React.Fragment>
      
    )
   
}
export default ButtonReload