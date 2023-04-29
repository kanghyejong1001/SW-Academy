import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react'
import Box from './components/Box/index';
import CheckBox from './components/CheckBox';
import useToggle from './components/ToggleBox/Toggle';
import useHover from './components/Hover/Hover';

function App() {
  // const [count, setCount] = useState(0)

  // const [foodOn, setFoodOn] = useState(false)
  // const [houseOn, setHouseOn] = useState(false)

  // const foodChange = useCallback((e) => setFoodOn(e.target.checked), [])
  // const houseChange = useCallback((e) => setHouseOn(e.target.checked), [])

  const [on, toggle] = useToggle()
  const [ref, isToggle] = useHover()

  return (
    <div className="App">
      <header className="App-header">


        {/* Custom Hook */}
        <button onClick={toggle}>{on ? 'true' : 'false'}</button>
        
        <div ref={ref} >{isToggle ? 'Hover' : '...'}</div>


        {/* useCallback */}
        {/* <CheckBox label="food" on={foodOn} onClick={foodChange}/>
        <CheckBox label="house" on={houseOn} onClick={houseChange}/> */}

        {/* React.memo */}
        {/* {count}
        <button onClick={() => setCount(count + 1)}>+</button>
        <Box /> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
