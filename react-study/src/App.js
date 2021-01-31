import './App.css';
// import React, { Fragment } from 'react' //Hook??
import React, { Component } from 'react' 
import MyComponet from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
/* 2장 실습 코드 */
// function App() {
  // const name = "React"
  // return (
  //   <div>
  //     <h1 className='name'>{name}</h1>
  //     <h2>{name === 'React' ? (<h1>OKK</h1>) : (<h1>No Cap</h1>)}</h2>
  //     <h2>테스트2</h2>
  //   </div>
  // );
// }
 
/* 3장 실습 코드 */
// class App extends Component{
//   render(){
//     const name = "react";
//     return <div className = "react">{name}</div>
//   }
// }

/* 모듈 불러오기*/
const App =() => {
  //children
  // return <MyComponet name="React" favorityNumber = {70}> 리액트 </MyComponet>
  // return <Counter/>
  return <EventPractice/>
};

export default App;

