
import { useRef } from 'react';
import './App.css';

function App() {
  let boxRef=useRef(null)
  let boxRef1=useRef(null)
  let boxRef2=useRef(null)


  function cl1(){
    boxRef.current.classList.add("active")
  }

  function cl2(){
    boxRef1.current.classList.add("active1")
  }

  function cl3(){
    boxRef2.current.classList.add("active2")
  }
  return (
    <div className="App">
     
     
      <div className='a1' ref={boxRef}>
      <button onClick={cl1}>Click Me</button>
      </div>
      <div className='a1' ref={boxRef1}>
      <button onClick={cl2}>Click Me</button>
      </div>
      <div className='a1' ref={boxRef2}>
        <button onClick={cl3}>Click Me</button>
      </div>
    
     </div>
  );
}

export default App;
