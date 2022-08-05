import { useState } from 'react';
import './App.css';


let numArray = [];

for(let num = 1; num <= 100; num++){
  if(num % 5 === 0){
    numArray.push('boom')
  }else if(num % 3 === 0){
    numArray.push('zap')
  }else{
    numArray.push(num);
  }
}


function App() {


const [toggle, setToggle] = useState(false);


  return (
    <div className="App">
<br/>
<button onClick = {() => setToggle(toggle => !toggle)}>To Reveal</button>

{toggle &&
<div>
{
  numArray.map(
    (item, index) =>
    <ul key={index} style={{listStyleType:'none'}}>
      <li >{index + 1}: {item}</li>
    </ul>
  )
}
</div>
}

    </div>
  );
}

export default App;
