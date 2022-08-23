import {useState,useEffect} from react; 

import './index.css';
import './App.css';

function App() {
  
  const[items,setItems] = useState();

  return (
    <div className="App">
     <div className="Container">
      <div className="navBar">
        <a href="">Home</a>
      </div>
     </div>
    </div>
  );
}

export default App;
