import './API_2_tester.css';

import { useState } from 'react';
import axios from "axios";

function API_2_tester_put() {

  const [col1, setCol1] = useState("");
  const onChangeName = (event)=>{
    setCol1(event.target.value);
  }
  const [col2, setCol2] = useState("");
  const onChangePoint = (event)=>{
    setCol2(event.target.value);
  }

  const onPutDB = async ()=> {
    const post_mes = {
      newval: col2
    }
    const  res  = await axios.put(
      `http://${process.env.REACT_APP_HJ_TEST_IP}:3000/api_2/${col1}`, post_mes
        );
  }
  return (

    <div className='API_2_tester'>
      <h3>API_2 test_put_DB</h3>
      <input 
      placeholder="Name(col1)"
      value={col1}
      onChange={onChangeName}
      />
      <input 
      placeholder="Name(col2)"
      value={col2}
      onChange={onChangePoint}
      />
      <button onClick={onPutDB}>PUT(수정)</button>


    </div>

  );

}


export default API_2_tester_put;