import React, { Component } from 'react'

import ButtonEncode from './ButtonEncode'
import ButtonDecode from './ButtonDecode';


class Form extends Component {

    createRefInputText = React.createRef();
    createRefInputOffset = React.createRef();

    data = (e) => {
        e.preventDefault();
        const valueInput = this.createRefInputText.current.value;
        const valueOffset = this.createRefInputOffset.current.value;
        this.props.encode(valueOffset, valueInput)
        console.log(valueOffset, valueInput);        
    }

    render() {
        return (

            <form>
                <div className="form-group">
                    <div className="col-md-6 mx-auto">
                        <input ref={this.createRefInputText} className="form-control " type="text" id="inputText" />
                    </div>
                    <div className="col-md-6 mx-auto my-3">
                        <input ref = {this.createRefInputOffset} type="number" className="form-control" />
                    </div>
                    <div className="text-center">
                    <ButtonEncode 
                   data = {this.data}                   
                    />
                    <ButtonDecode                     
                 
                    />
                  
                        
                    </div>
                    <div className="text-center my-3">
                        <label htmlFor="inputText">{this.props.resultado}</label>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form