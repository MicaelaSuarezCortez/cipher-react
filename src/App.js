import React, {Component} from 'react';
import Form from './components/Form'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      offset: '',
      texto: '',    
      resultado: []
    }
  }

  encode = (offset, string) => {
    let arrayText = [];
    let inputText = string;
    let inputOffset = parseInt(offset);   
    
    for (let i = 0; i < inputText.length; i++) {
      let charCodeToAscii = inputText[i].charCodeAt();     
      let position = (charCodeToAscii - 65 + inputOffset) % 26 + 65;
      console.log('Position:' + position);
      let asciiToChar = String.fromCharCode(position)
       arrayText.push(asciiToChar);    
       console.log('word:' + asciiToChar);
       
      this.setState({
        texto: inputText,
        offset:inputOffset,
        resultado: arrayText 
      })
  
    }        
  } 
  
  render(){
    return (
      <div className="container">
         <header className="mx-auto text-center">
          <h1>
           Cipher
          </h1>
          </header>
        <Form 
        encode = {this.encode}   
        resultado = {this.state.resultado}  
        offset = {this.state.offset}
        />       
      </div>     
    )
  } 

}

export default App;
