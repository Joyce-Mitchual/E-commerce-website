import './Hcontent.css';


const Hcontent = () => {

    return(

     <div>
          {/* second section of the page */}

      <div className="trendingProducts">
        <p style={{ fontSize: (20) }}>TRENDING PRODUCTS</p>
        < div className="images">
          <div className="trend1" >
          </div>
          <div className="trend2" ></div>
          <div className="trend3" ></div>
          <div className="trend4" ></div>
        </div>
        {/* <span>OUTDOOR BASICS SEAMED LEGGING</span>
        <span>OUTDOOR BASICS TANK BODYSUIT</span> */}
      </div>

      {/* Third section of the page */}
      <div>
        < div className="images">
          <div className="secondrow" >
            <div className="cottenContent">
              <div>
                <h2>COTTEN COLLECTION</h2>
              </div>
              <p>
                Our most tagged collection features selfie-worthy sets made from a soft, comfortable cotton.
              </p>

              <div>
                <button type="button" className="btn-btn">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth section  of the page*/}
      <div>
        < div className="images">
          <div className="thirdrow" >
            <div className="loungeContent">
              <div>
                <h2>LOUNGEWEAR</h2>
              </div>
              <p>
                Lounging is a lifestyle. Our elevated, ultra-cozy outfits are designed for at-home—and everywhere<br /> else.
              </p>

              <div>
                <button type="button" className="btn-btn">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth section of the page */}
      <div className="images">
        <div className="bras" >
          
          <p style = {{marginTop:(395)}}>BRAS</p>
         
        </div>
        <div className="underwear" >
        <p style = {{marginTop:(395)}}>UNDERWEAR</p>
        </div>
        <div className="pajamas" >
        <p style = {{marginTop:(395)}}>PAJAMAS</p>
        </div>
        <div className="bodysuit" >
        <p style = {{marginTop:(395)}}>BODYSUIT</p>
        </div>
      </div>

      <div className = "collectionText">
       
        
        
       
      </div>


      {/* Sixth section of the page(kids)*/}
      <div>
        < div className="images">
          <div className="fourthrow" >
            <div className="kidsContent">
              <div>
                <h2>KIDS</h2>
              </div>
              <p>
                Match your mini-me or refresh your child's loungewear with the comfiest hoodies, tank tops, lounge<br />pants and more.
              </p>

              <div>
                <button type="button" className="btn-btn">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="aboutText">SKIMS IS A SOLUTIONS ORIENTED BRAND CREATING THE<br />NEXT GENERATION OF UNDERWEAR, LOUNGEWEAR AND,<br />SHAPEWEAR.</p>
      </div>

      {/* seventh section of the page */}
      <div>
        < div className="images">
          <div className="blue" ></div>
          <div className="blue1" ></div>
          <div className="blue2" ></div>
        </div>
      </div>
  <a href = "/shop">kukua</a>
     </div>
    
        )
    
}


export default Hcontent;