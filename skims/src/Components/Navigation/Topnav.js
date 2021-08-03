
import './Topnav.css';
// import  logo from '../../Assets/Images/skim.png';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


const Topnav = () => {

    return (
        <div className="Navbar">

            {/* Div for logo */}
            <div className="navLogo">
                <h1 style={{ color: 'white', fontFamily: 'caveat', fontStyle: "italic" }}>SKIMS</h1>
                {/* <img classname = "logoImage" src={logo}/>  */}
            </div>

            {/* Div for search bar */}
            < div >
                <div className="searchBar">
                    <input type="text" placeholder="Search.." className="inputField" />
                    <span>
                        <button type="button" className="btn">
                            <BiSearchAlt2 size={15} />
                        </button>

                    </span>
                </div>

            </div>

            {/* Div for navbar links */}
            <Router>
                <div >
                    <nav className="navElements">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>

                            </li>
                            <span className="line" style={{ color: "white" }}></span>
                            
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <span className="line" style={{ color: "white" }}></span>

                            <li>
                                <Link to="/Shop">Shop</Link>
                            </li>
                            <span className="line" style={{ color: "white" }}></span>

                            <li>
                                <Link to="/help">Help</Link>
                            </li>


                            <li>
                                <button type="button" className="cartBtn" >
                                    Your Cart <FaShoppingCart />
                                </button>
                            </li>
                        </ul>
                    </nav>

                </div>
            </Router>
            <div>

            </div>
        </div>

    )


}


export default Topnav;