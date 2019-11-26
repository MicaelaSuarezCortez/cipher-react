import React, {Component} from 'react';
import Form from './components/Form'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      texto: '',
      resultado: []
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
        <Form/>
       
      </div>
     
    )
  } 

}

export default App;
