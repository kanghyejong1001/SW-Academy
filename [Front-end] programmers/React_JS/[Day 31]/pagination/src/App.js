import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Pagination from './components/Pagination';
import { useState } from 'react';
import Box from './components/Box';

// 아래처럼 프래그마를 붙여 CSS 적용
// ----------------------------------------------
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const style = css`
  color: hotpink;
`

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
)
// -----------------------------------------------

function App() {
  // const [page, setPage] = useState(0)
  // const articles = new Array(100).fill().map((_, i) => ({
  //   id: i,
  //   title: `${i}번 게시물`
  // }))

  // const limit = 10
  // const offset = page * limit



  return (
    <div className="App">
      <header className="App-header">

        {/* 직접 css 작업하기 */}
        <div css={{ width: 100, height: 100, backgroundColor: "white"}}></div>

        {/* emotion babel 적용 */}
        <SomeComponent />

        {/* stylesheet 적용 */}
        <Box bgColor={"green"}/>


        {/* Pagination */}
        {/* <Pagination 
          defaultPage={0} 
          limit={limit} 
          total={articles.length}
          onChange={setPage}
        />
        <Board articles={articles.slice(offset, offset + limit)}/> */}
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
    )
}

export default App;
