import './API_1_tester.css';

import { useState } from 'react';
import axios from "axios";

function API_1_tester_get() {
  
  const [option, setOption] = useState("");
  const onChangeOption = (event)=>{
    setOption(event.target.value);
  }
  const [data, setData] = useState({api_1_get_a:"", api_1_get_b:""});
  const onGet = async ()=> {
    if (option == ""){
      const  res = await axios.get(
        `http://${process.env.REACT_APP_HJ_TEST_IP}:3000/api_1`
        );
      setData({...res.data});
    }
    else if(option != ""){
      const  res = await axios.get(
        `http://${process.env.REACT_APP_HJ_TEST_IP}:3000/api_1/${option}`
        );
      setData({...res.data});
    }

  }
  return (

    <div className='API_1_tester'>
      <div>
        <h3>API_1 test_get</h3>

        <input 
        placeholder="option"
        value={option}
        onChange={onChangeOption}
        />

        <button onClick={onGet}>Get(조회)</button>

        <div>
          response data:
          {data.api_1_get_a}, 
          {data.api_1_get_b}
        </div>
      </div>
     
    </div>

  );

}


export default API_1_tester_get;