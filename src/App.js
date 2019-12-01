
import React, {Component} from 'react';
import Form from './components/Form'
import PropTypes from 'prop-types';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      offset: 1,
      texto: '',    
      resultado: []
    }
  }

  encode = (offset, string) => {
    let arrayText = [];
    let inputText = string;
    let inputOffset = parseInt(offset);    
      
    let valueSpanText = document.getElementById('spanText');
    let valueSpanOffset = document.getElementById('spanOffset');
    let valueInputHistoriaClinica = document.getElementById('inputHistoriaClinica');
    let valueSpanHistoriaClinica = document.getElementById('spanHistoria');

    if(inputText.length < 1 || valueInputHistoriaClinica.length < 1){
      valueSpanText.innerHTML = 'Debes ingresar letras de la "A-Z" o "a-z';      
      valueSpanHistoriaClinica.innerHTML ='No se aceptan campos vacíos'; 
    } 
    else if (/^([0-9])*$/.test(inputText)){    
      valueSpanText.innerHTML = 'Solo letras de la "A-Z" o "a-z"';
     
    }
    else if(isNaN(inputOffset) || inputOffset < 1){
      valueSpanOffset.innerHTML = "Solo números mayores a 0";

    } 
    else {
      for (let i = 0; i < inputText.length; i++) {  
        valueSpanText.innerHTML = '';
        valueSpanOffset.innerHTML = '';
        valueSpanHistoriaClinica.innerHTML = '';

        let charCodeToAscii = inputText[i].charCodeAt(); 

        if(charCodeToAscii >= 65 & charCodeToAscii <=90)   {                
          let position = (charCodeToAscii - 65 + inputOffset) % 26 + 65;           
            let asciiToChar = String.fromCharCode(position)         
          arrayText.push(asciiToChar);       
        } 

        else if (charCodeToAscii === 32){
          let space = ' ';
          arrayText.push(space)
        }    
        else {
          let position = (charCodeToAscii - 97 + inputOffset) % 26 + 97;     
          let asciiToChar = String.fromCharCode(position)
           arrayText.push(asciiToChar); 
        }      
        this.setState({
          texto: inputText,
          offset:inputOffset,
          resultado: arrayText 
        })
    
      } 
    }
         
  } 
  
  decode = (offset, string) => {
    let arrayText = [];
    let inputText = string;
    let inputOffset = parseInt(offset);
    console.log('offset:' + inputOffset);

    let valueSpanText = document.getElementById('spanText');
    let valueSpanOffset = document.getElementById('spanOffset');

    if(inputText.length < 1){
      valueSpanText.innerHTML = 'Debes ingresar letras de la "A-Z" o "a-z';       
    } 
    else if (/^([0-9])*$/.test(inputText)){
      valueSpanText.innerHTML = 'Solo letras de la "A-Z" o "a-z'
    }
    else if(isNaN(inputOffset) || inputOffset < 1){
      valueSpanOffset.innerHTML = "Solo números mayores a 0"
    } 
    else {
      for (let i = 0; i < inputText.length; i++) {
        valueSpanText.innerHTML = '';
        valueSpanOffset.innerHTML = '';
        let charCodeToAscii = inputText[i].charCodeAt(); 
        if(charCodeToAscii >= 65 && charCodeToAscii <= 90){
          let position = (charCodeToAscii - 90 - inputOffset) % 26 + 90;     
          let asciiToChar = String.fromCharCode(position)
          arrayText.push(asciiToChar);    
        }
        else if (charCodeToAscii === 32){
          let space = ' ';
          arrayText.push(space);
        }
        else {
          let position = (charCodeToAscii - 122 - inputOffset) % 26 + 122;     
          let asciiToChar = String.fromCharCode(position)
           arrayText.push(asciiToChar); 
        }       
       
        this.setState({
          texto: inputText,
          offset:inputOffset,
          resultado: arrayText 
        })
      }
    }
   
  }
 
 
  render(){
    return (
      <div className="container-fluid">
        <div className = "row">
            <div className="col-xs-12 col-sm-2 aside">
              <figure>
                <img src="https://user-images.githubusercontent.com/45082005/69830939-2134f580-11f5-11ea-8dd4-977b53d83165.png" alt="logo" className="image"/>
                <span className="frase text-center d-block">
                  GOOD HOSPITAL
                </span>
              </figure>            
            </div>
            <div className="col-xs-12 col-sm-9">
              <header className="mx-auto text-center">               
                <span className="header my-4">
                Repositorio de Historias Clínicas
                </span>
                <figure>
                  <img  src="https://user-images.githubusercontent.com/45082005/69832301-77a53280-11fb-11ea-88dc-991499006afb.PNG" alt="portada" className="rounded"/>
                </figure>
              </header>
              <Form 
              encode = {this.encode}  
              decode = {this.decode} 
              resultado = {this.state.resultado}  
              offset = {this.state.offset}
              />  
             
            </div>
        </div>    
        <footer className="row">
              <div>

              </div>
        </footer>   
      </div>     
    )
  } 

}
Component.propTypes = {
    string : PropTypes.string,
    offset: PropTypes.number,
    
}
export default App;