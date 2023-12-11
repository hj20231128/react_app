import './API_1_tester.css';

import { useState } from 'react';
import axios from "axios";

function API_1_tester_post() {

  const [col1, setCol1] = useState("");
  const onChangeName = (event)=>{
    setCol1(event.target.value);
  }
  const [col2, setCol2] = useState("");
  const onChangePoint = (event)=>{
    setCol2(event.target.value);
  }
  const [data, setData] = useState({api_1_post_a:"", api_1_post_b:""});
  //const [data, setData] = useState();


  const onPost = async ()=> {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const post_mes = {
      a: col1,
      b: col2
    }
    const  res = await axios.post(
        `http://${process.env.REACT_APP_HJ_TEST_IP}:3000/api_1`, post_mes, axiosConfig
        );
    //console.log('res',res);
    setData({...res.data});
  }
  return (

    <div className='API_1_tester'>
      <div>
        <h3>API_1 test_post</h3>
        <input 
        placeholder="api_1_post_a"
        value={col1}
        onChange={onChangeName}
        />
        <input 
        placeholder="api_1_post_b"
        value={col2}
        onChange={onChangePoint}
        />
        <button onClick={onPost}>POST(추가)</button>

        <div>
        response data:
          {data.api_1_post_a}, 
          {data.api_1_post_b}
        </div>
      </div>
     
    </div>

  );

}


export default API_1_tester_post;