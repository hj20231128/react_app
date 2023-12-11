import './API_2_tester.css';
//import API_2_tester_item from './API_2_tester_item';

import { useState } from 'react';
import axios from "axios";

function API_2_tester_post() {

  const [col1, setCol1] = useState("");
  const onChangeName = (event)=>{
    setCol1(event.target.value);
  }
  const [col2, setCol2] = useState("");
  const onChangePoint = (event)=>{
    setCol2(event.target.value);
  }
  // const [data, setData] = useState([{id:0, col1:"", col2:0}]);

  const onPostDB = async ()=> {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const post_mes = {
      a: col1,
      b: col2
    }
    const  res  = await axios.post(
      `http://${process.env.REACT_APP_HJ_TEST_IP}:3000/api_2/`, post_mes, axiosConfig
        );
    //   console.log('res:',res);
    // setData([res.data]);
    // console.log('data:',data);
  }
  return (

    <div className='API_2_tester'>
      <h3>API_2 test_post_DB</h3>
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
      <button onClick={onPostDB}>POST(등록)</button>

      {/* {data.map(
        (item)=>(  <API_2_tester_item key ={item.id} data ={item} />   )
      )} */}

    </div>

  );

}


export default API_2_tester_post;