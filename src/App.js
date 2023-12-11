import './App.css';

import logo_kk from './logo_kk.jpg';

import API_1_tester_get from './API_1_tester_get';
import API_1_tester_post from './API_1_tester_post';

import API_2_tester_get from './API_2_tester_get';
import API_2_tester_post from './API_2_tester_post';
import API_2_tester_put from './API_2_tester_put';
import API_2_tester_delete from './API_2_tester_delete';

import API_3_tester from './API_3_tester';


function App() {

  return (

    <div className="App">
      <div>
        <img src={logo_kk}/>
      </div>
      <API_1_tester_get />
      <API_1_tester_post />

      <API_2_tester_get />
      <API_2_tester_post />
      <API_2_tester_put />
      <API_2_tester_delete />

      <API_3_tester />

    </div>
  );
}

export default App;
