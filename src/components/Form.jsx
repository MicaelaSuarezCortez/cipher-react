import React, { Component } from 'react'

import ButtonEncode from './ButtonDecode'
import ButtonDecode from './ButtonEncode';


class Form extends Component {

    createRefInputText = React.createRef();
    createRefInputOffset = React.createRef();

    inputText = (e) => {
        e.preventDefault();
        const valueInput = this.createRef.current.value;
        console.log(valueInput);        
    }

    inputOffset = (e) => {
        e.preventDefault();
        const valueOffset = this.createRefInputOffset.current.value;
        console.log(valueOffset);        
    }

    render() {
        return (

            <form onSubmit={this.inputText}>
                <div className="form-group">
                    <div className="col-md-6 mx-auto">
                        <input ref={this.createRef} className="form-control " type="text" id="inputText" />
                    </div>
                    <div className="col-md-6 mx-auto my-3">
                        <input type="number" className="form-control" />
                    </div>
                    <div className="text-center ">
                    <ButtonDecode />
                    <ButtonEncode />
                        
                    </div>
                    <div className="text-center my-3">
                        <label htmlFor="inputText">Codigo</label>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form