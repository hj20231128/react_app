import './API_2_tester.css';

import { useState } from 'react';
import axios from "axios";

function API_2_tester_delete() {
  const [col1, setCol1] = useState("");
  const onChangeName = (event)=>{
    setCol1(event.target.value);
  }
  const onDeleteDB = async ()=> {
    const  res  = await axios.delete(
      `http://${process.env.REACT_APP_HJ_TEST_IP}:3000/api_2/${col1}`
        );
  }
  return (
    <div className='API_2_tester'>
      <h3>API_2 test_delete_DB</h3>
      <input 
      placeholder="Name(col1)"
      value={col1}
      onChange={onChangeName}
      />
      <button onClick={onDeleteDB}>Delete(삭제)</button>
    </div>
  );
}
export default API_2_tester_delete;