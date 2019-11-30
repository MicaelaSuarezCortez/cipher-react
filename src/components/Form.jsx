import React, { Component } from 'react'

import ButtonEncode from './ButtonEncode'
import ButtonDecode from './ButtonDecode'
import ButtonReload from './ButtonReload'


class Form extends Component {

    createRefInputText = React.createRef();
    createRefInputOffset = React.createRef();

    dataEncode = (e) => {
        e.preventDefault();
        const valueInput = this.createRefInputText.current.value;
        const valueOffset = this.createRefInputOffset.current.value;
        this.props.encode(valueOffset, valueInput)       
    }

    dataDecode = (e) => {
        e.preventDefault();
        const valueInput = this.createRefInputText.current.value;
        const valueOffset = this.createRefInputOffset.current.value;
        this.props.decode(valueOffset, valueInput)
    }

    refreshPage = () => {
        window.location.reload(false)
      }
    render() {
        return (
            <form>
                <div className="form-group">
                    <div className="col-md-6 mx-auto my-3">
                        <input type="text" placeholder="Ingrese aquí n° de historia clínica" className="form-control" id="inputHistoriaClinica"/>
                        <span className="d-block text-warning text-center span" id="spanHistoria"></span>
                    </div>
                    <div className="col-md-6 mx-auto">
                        <input ref={this.createRefInputText} placeholder="Ingrese texto para cifrar la historia" className="form-control " type="text" id="inputText" />
                        <span className="d-block text-warning text-center span" id="spanText"></span>
                    </div>
                    <div className="col-md-2 mx-auto my-3">
                        <input ref = {this.createRefInputOffset} placeholder="N°" type="number" className="form-control" id="inputOffset"/>
                        <span className="d-block text-warning text-center span" id="spanOffset"></span>
                    </div>
                    <div className="text-center">
                    <ButtonEncode 
                   dataEncode = {this.dataEncode}                   
                    />
                    <ButtonDecode                     
                    dataDecode = {this.dataDecode}
                    />                  
                    <ButtonReload
                    refreshPage = {this.refreshPage}/>
                    </div>
                    <div className="text-justify my-3">
                        <label htmlFor="inputText" className="d-block label">Historia clínica: {this.props.resultado}</label>
                        <label htmlFor="inputOffset" className="d-block label">Key: {this.props.offset}</label>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form