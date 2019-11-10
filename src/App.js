import React from 'react';
import './App.scss';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      int1: 0,
      int2: 0,
      answer: "?"
    };
  }
  
  componentWillMount(){
    this.setRandomNumber();
  }
 
  setRandomNumber= () =>{
    this.setState({
      int1:this.genRnad(),
      int2: this.genRnad(),
      answer: "?"
    })
  }



  genRnad(){
    return Math.floor(Math.random() *13);
  }
  calc = () =>{
    this.setState({
      answer: this.state.int1 +  this.state.int2
    })
  }

  render() {
    return (
      <div>
        <div id="wrapper">
          <div id="q">
            <span ref="num1">{this.state.int1}</span>
            <span style={{minWidth: "40px"}}>+</span>
            <span ref="num2">{this.state.int2}</span>
            <button onClick={this.calc} className="btn" id="equal">=</button>
            <span id="answer">{this.state.answer}</span>
          </div>
          <div>
            <button onClick={this.setRandomNumber} className="btn" id="reset">
              &#8635; reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
