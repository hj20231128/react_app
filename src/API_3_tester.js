import './API_3_tester.css';


import { useState, useEffect } from 'react';
import axios from "axios";

function API_3_tester() {

  const [imageurl, setImageurl] = useState([]);

  const loadingImages = async ()=>{
    const  res  = await axios.get(`http://${process.env.REACT_APP_HJ_TEST_IP}:3000/api_3`);
    const imageurls = res.data.map(
      (item)=>(`http://${process.env.REACT_APP_HJ_TEST_IP}:3000/images/${item}`)
      //(item)=>(`http://3.27.174.62:3000/images/${item}`)
    )
    setImageurl(imageurls);
  }

  useEffect(    
    ()=>{   loadingImages();  }  ,[]
  );

  return (

    <div className='API_3_tester'>
      <h3>API_3 test_get_imageurl</h3>
      {imageurl.map(
        (item, index)=>(  <img key={index} src ={item} />   )
      )}
    </div>

  );

}


export default API_3_tester;