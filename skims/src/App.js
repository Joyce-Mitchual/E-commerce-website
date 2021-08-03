// import { GrNext } from 'react-icons/gr';
// import { Link } from "react-router-dom";
import './App.css';
import { Hcontent } from "./Components";

import Footer from './Components/Footer/Footer';

import Topnav from './Components/Navigation/Topnav';

function App() {
  return (
    <div className="App" >
      <Topnav />
      

      {/* Text on the topnav */}
      <div className="collection-header">
        <h1>COMING  SOON</h1>
        <p>
          <span>Outdoor basics</span>
          <br></br>
          <span>Drops Thur. July 29</span>
          <br></br>
          <span>at 9 AM PT / 12 PM ET</span>
          <br></br>
        </p>
      </div>

      {/* Content on the main page */}
     <Hcontent/>
     
      {/* The Footer */}
      <hr />
      <Footer />




    </div>
  );
}

export default App;
