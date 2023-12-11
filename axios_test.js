const axios = require('axios');

axios({
  method: "post", // 요청 방식
  url: "http://localhost:3000/api_2", // 요청 주소
  data: {
    "a": "서멀캠",
    "b": "90"
  } // 제공 데이터(body)
}).catch(function (err){
    console.log(err); // 에러 처리 내용
});



