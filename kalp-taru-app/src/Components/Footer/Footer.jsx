import React from 'react'
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}  >

        <div className={styles.footerChidleOne}>
            <div>
                <h1 style={{fontWeight:"bold",fontSize:"18px"}} >Get to Know Us</h1>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Science</p>
            </div>

            <div>
                <h1 style={{fontWeight:"bold",fontSize:"18px"}} >Connect with Us</h1>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>

            <div>
                <h1 style={{fontWeight:"bold",fontSize:"18px"}} >Make Money with Us</h1>
                <p>Sell on Amazon</p>
                <p>Sell under Amazon Accelerator</p>
                <p>Protect and Build Your Brand</p>
                <p>Amazon Global Selling</p>
                <p>Become an Affiliate</p>
                <p>Fulfilment by Amazon</p>
                <p>Advertise Your Products</p>
                <p>Amazon Pay on Merchants</p>
            </div>
            
            <div>         	
                <h1 style={{fontWeight:"bold",fontSize:"18px"}} >Let Us Help You</h1>
                <p>COVID-19 and Amazon</p>
                <p>Your Account</p>
                <p>Returns Centre</p>
                <p>100% Purchase Protection</p>
                <p>Amazon App Download</p>
                <p>Amazon Assistant Download</p>
                <p>Help</p>
            </div>
        </div>
           

        <div className={styles.footerChidleTwo} >
            <div className={styles.bottomOne} >
                <hr/>
                <div>
                    <img style={{width:"150px",margin:"auto",marginTop:"1%"}} src='./kalp.png' alt='kalptaru' />
                </div>
                <div style={{wordSpacing:"10px",marginTop:"1%"}} >Australia Brazil Canada China France Germany Italy Japan Mexico Netherlands Poland Singapore Spain Turkey United_Arab_Emirates 
                  <br/>  United_Kingdom  United_States</div>
            </div>

            <div  className={styles.bottomTwo}>
                <div>
                AbeBooks<br/>
                Books, art<br/>
                & collectibles
                </div>

                <div>
                Amazon Web Services<br/>
                Scalable Cloud<br/>
                Computing Services
                </div>

                <div>
                Audible<br/>
                Download<br/>
                Audio Books
                </div>

                <div>
                DPReview<br/>
                Digital<br/>
                Photography
                </div>

                <div>
                IMDb<br/>
                Movies, TV<br/>
                & Celebrities
                </div>

                <div>
                Shopbop<br/>
                Designer<br/>
                Fashion Brands
                </div>

                <div>
                Amazon Business<br/>
                Everything For<br/>
                Your Business
                </div>

                <div>
                Prime Now<br/>
                2-Hour Delivery<br/>
                on Everyday Items
                </div>

                <div>
                Amazon Prime Music<br/>
                90 million songs, ad-free<br/>
                Over 15 million podcast episodes
                </div>

            </div>

        </div>
      </div>
    </>
  )
}

export default Footer





