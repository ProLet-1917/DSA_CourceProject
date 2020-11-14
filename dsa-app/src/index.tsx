import React, { useState } from "react";
import ReactDOM from "react-dom";


import { Map } from 'react-amap';
import { ReactComponent } from "*.svg";


const App = () => {
  
  
  const [stationCnts, setCnts] = useState(1);
  
  const clickHandler = () => {
    setCnts(stationCnts + 1);
  }

  return(
    <div>Hello React

      <button onClick={clickHandler}>
        点击按钮+1
      </button>
      <br></br>
      {stationCnts}
      <br/>
      {}
      <script type="module" src="main.ts"> </script>
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))
/*ReactDOM.render(
  <Map amapkey={'5f9f571c1e5291573744a37de7128d46'} version={'2.0'} />,
  document.querySelector('#app')
)*/