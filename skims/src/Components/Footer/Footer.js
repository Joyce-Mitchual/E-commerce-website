import React from 'react';
import { RiInstagramLine } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';
import { FaPinterestP } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { IoLogoTiktok } from 'react-icons/io5';
import './Footer.css';

const Footer = () => {

    return (

        <div className="main-footer">
            <div className="container">
                <div className="row">


                    {/* Column2 */}
                    <div className="col1">
                        <h4>MAIN MENU</h4>
                        <ul className="list-unstyled">
                            <li>Home</li>
                            <li>About</li>
                            <li>Shop</li>
                            <li>Help</li>
                        </ul>
                    </div>

                    {/* Column3 */}
                    <div className="col2">
                        <h4>DISCOVER</h4>
                        <ul className="list-unstyled">
                            <li>The Team</li>
                            <li>Our Brand</li>
                            <li>Our History</li>
                            <li>Our Motto</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="col3">
                        <h4>SOCIALS</h4>
                        <ul className="list-unstyled1">
                            <li>
                                <span><RiInstagramLine size={20} /></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span><FaFacebookF size={20} /></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span><GrTwitter size={20} /></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span><FaPinterestP size={20} /></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span><IoLogoYoutube size={20} /></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span> <IoLogoTiktok size={20} /></span>
                            </li>
                        </ul>
                    </div>

                    <div className="email">
                        <h4>SIGN-UP</h4>
                        <span className="field"><input type="text" placeholder="Email" className="field" /></span>
                        <span>
                            <input type="submit" placeholder="Submit" className="but" />
                        </span> <br></br>
                        <div className = "e-text">
                            <p>By signing up you agree to receive recurring automated <br /> marketing messages from SKIMS. View Terms & Privacy.</p><br />
                        </div>
                    </div>



                </div>
                
                <div className="row">
                    <p className="col-sm">
                        <span>Accesibility</span > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>Privacy </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span> Terms  Of Service</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                 
                    </p>
                </div>
            </div>

        </div>


    )

}


export default Footer;