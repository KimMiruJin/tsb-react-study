import './App.css';
import React, { Fragment } from 'react' //Hook??

function App() {
  const name = "Reacrt"
  return (
    <div>
      <h1 className='name'>{name}</h1>
      <h2>{name === 'React' ? (<h1>OKK</h1>) : (<h1>No Cap</h1>)}</h2>
      <h2>테스트2</h2>
    </div>
  );
}

export default App;
