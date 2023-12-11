import './API_2_tester.css';
import API_2_tester_item from './API_2_tester_item';

import { useState } from 'react';
import axios from "axios";

function API_2_tester_get() {

  const [col1, setCol1] = useState("");
  const onChangeName = (event)=>{
    setCol1(event.target.value);
  }
  const [data, setData] = useState([{id:0, col1:"", col2:0}]);

  const onGetDB = async ()=> {
    const  res  = await axios.get(
      `http://${process.env.REACT_APP_HJ_TEST_IP}:3000/api_2/${col1}`
        );
      console.log('res:',res.data);
    setData(res.data);
  }
  return (

    <div className='API_2_tester'>
      <h3>API_2 test_get_DB</h3>
      <input 
      placeholder="Name(col1)"
      value={col1}
      onChange={onChangeName}
      />
      <button onClick={onGetDB}>GET(조회)</button>

      {data.map(
        (item)=>(  <API_2_tester_item key ={item.id} data ={item} />   )
      )}

    </div>

  );

}


export default API_2_tester_get;