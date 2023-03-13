import Logo from './components/Logo';
import Paragraph from './components/Paragraph';
import Board from './components/Board';
import Counter from './components/Counter';
import Input from './components/Input';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import AutoCounter from './components/AutoCounter';

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [visible, setVisible] = useState(false)
  const [ totalCount, setTotalCount ] = useState(0)
  const [ count, setCount ] = useState(0)
  

  // useRef
  const inputRef = useRef()

  // 두번째 인자인 [count] 안에 변수만 변화 감지
  // useEffect(() => {
  //   console.log(`click : ${count}`)
  // }, [count])

  // 처음 로딩됐을 때만 작동
  // useEffect(() => {
  //   console.log(`component loaded`)
  //   const handleScroll = () => {
  //     console.log(window.scrollY)
  //   }

  //   document.addEventListener('scroll', handleScroll)
  //   return () => document.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    <div className="App">
      <header className="App-header">

      <AutoCounter />

      {/* useRef */}
      {/* 지역 변수 */}


      {/* 직접 DOM 접근 */}
      {/* <Input ref={inputRef}/>
      <input ref={inputRef}/>
      <button onClick={() => inputRef.current.focus()}>Focus</button> */}


      {/* useEffect */}
      {/* <div>{count}</div>
      <button onClick={() =>setCount(count + 1)}>+</button> */}

        {/* useState */}
        {/* totalCount: {totalCount}
        <Counter 
          onIncrease = {(count) => setTotalCount(totalCount + 1)}
          onDecrease = {(count) => setTotalCount(totalCount - 1)}
        />
        <Counter 
          onIncrease = {(count) => setTotalCount(totalCount + 1)}
          onDecrease = {(count) => setTotalCount(totalCount - 1)}
        /> */}
        


        {/* 분기 */}
        {/* <button onClick={() => setVisible(!visible)}>Toggle</button> */}
        {/* {visible && (
          <h1>visible</h1>
        )} */}
        {/* {visible ? (
          <h1>visible</h1>
        ) : null} */}

        {/* 반복 */}
        {/* <Board articles={arr}/> */}


        {/* 컴포넌트 연습 */}
        <Logo />
        {/* <Logo size="100px"/> */}
        <Paragraph>
          Edit <code>src/App.js</code> and save to reload.
        </Paragraph>

        {/* <Paragraph size={20} color="yellow">
          Edit <code>src/App.js</code> and save to reload.
        </Paragraph> */}


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* 리스트 태그 사용 */}
        {/* <ul>
          {arr.map(item => <li key={item}>{item}</li>)}
        </ul> */}
      </header>
    </div>
  );
}

export default App;
