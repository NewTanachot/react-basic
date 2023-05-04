import logo from './logo.svg';
import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import HelloComponent from './Components/HelloComponent';
import { createContext } from 'react';
import FormComponent from './Components/FormComponent';
import DataContext from './Data/DataContext';

const Component_1 = ({title1, title2}) => {
  const [StateData, setStateData] = useState("Click button for change this Context!")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((obj) => setStateData(obj.title));
  }, []);

//  console.log(StateData)

  return (
      <div className='text-center m-4'>
        <h1>{title1}</h1>
        <p>{StateData}</p>
        <button className='btn btn-sm btn-secondary' onClick={() => setStateData(title2)}>Click me !!!</button>
      </div>  
  );
}

const Component_2 = () => {
  return (
    <ul>
      <li>New</li>
      <li>Jai</li>
    </ul>
  );
}

function App(props) {

  const TestData = [
    {NickName: "New"},
    {NickName: "Jai"},
    {NickName: "Not"},
    {NickName: "Jub"},
    {NickName: "Orm"},
    {NickName: 123456789},
  ];

  TestData.PropTypes = {
    NickName:PropTypes.string || PropTypes.number
  }

  return (
    <DataContext.Provider value={
        {
          text1: "This is useContext_1",
          text2: "This is useContext_2"
        }
      }>
      <div className="container my-4">
        {/* <HelloComponent></HelloComponent> */}

        <FormComponent></FormComponent>

        {TestData.map((x) => {
          return (
            <Component_1
              key={uuidv4()}
              title1={x.NickName}
              title2={`${props.text} ${x.NickName}`}
            ></Component_1>
          );
        })}

        {/* <Component_2></Component_2> */}
      </div>
    </DataContext.Provider>
  );
  
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h2>
  //         {/* Edit <code>src/App.js</code> and save to reload. */}
  //         Hello, Dev as New 
  //       </h2>
  //       <p>welcome to React.js learning session</p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
