import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'



function MyHeader(props) {
  const { num, onButtonClicked, onRestart} = props
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Counter App</h1>
        <div className="App-body">
        <p>
          <h1>Click Count: {num}</h1>
        </p>
        <button onClick={() => onButtonClicked()}>Add To Count</button>
        <br/>
        <button onClick={() => onRestart()}>Clear Count</button>
        </div>
      </header>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyHeader num={count} 
      onButtonClicked={() => {
        setCount(count + 1)
      }}
      onRestart={() => {
        setCount(0)
      }}
      />

      
    </div>
  );
}


// class App extends React.Component {
//   state = {
//     changeMe: 'nothing'
//   }

//   componentDidMount() {
//     this.setState({
//       changeMe: 'On mount value!'
//     })
//   }

//   render() {
//   const appText = "This is some text on the window"

  

//   return (
//     <div className="App">
//       <MyHeader text={this.state.changeMe} something={"This is someting else"} onButtonClicked={() => {
//         this.setState({changeMe: 'Button Clicked Value!'})
//       }}/>
//       <p>I am page content</p>
//       <p>I am from the state: {this.state.changeMe}</p>
//     </div>
//   );
// }
// }

export default App;
