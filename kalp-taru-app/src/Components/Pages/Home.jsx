import React from 'react'
import styles from "./Home.module.css"
import { Grid, GridItem } from '@chakra-ui/react'

const Home = () => {
  return (
    <>
      <div className={styles.container} >

          <div className={styles.outer} >

              <div className={styles.blank} >
                  
              </div>

              <div className={styles.details} >
              <Grid templateColumns={{base:'repeat(1,1fr)',
              base:'repeat(1,1fr)',
              sm:'repeat(1,1fr)',
              md:'repeat(2,1fr)',
              lg:'repeat(4,1fr)'
              }} 
              gap={6}>
                      <GridItem w='100%' h='350' bg='white'>
                      <h1 style={{fontWeight:"bold",fontSize:"17px"}} >Up to 65% off | Applianess for your home</h1>
                      <div className={styles.divInsidGridContainer} >

                      <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/JanART23/Hero/Updated/03-AC-PC-QC-1x._SY116_CB615774489_.jpg" alt="Air conditioners" />
                          <p>Air conditioners</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/JanART23/Hero/Updated/01-REF-PC-QC-1x._SY116_CB615774489_.jpg" alt="Refrigerators" />
                            <p>Refrigerators</p>
                      </div>

                      </div>

                      <div className={styles.divInsidGridContainer}>

                        <div className={styles.divInsidGrid} >
                          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/JanART23/Hero/Updated/04-MWO-PC-QC-1x._SY116_CB615774489_.jpg" alt="Microwaves" />
                          <p>Microwaves</p>
                        </div>

                        <div className={styles.divInsidGrid} >

                          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/JanART23/Hero/Updated/01-WM-PC-QC-1x._SY116_CB615774489_.jpg" alt="Washing Machines" />
                            <p>Washing Machines</p>
                        </div>

                      </div>
                    
                      <h1>See all offers</h1>
                      </GridItem>

                      <GridItem w='100%' h='350' bg='white' >
                      <h1 style={{fontWeight:"bold",fontSize:"17px"}} >Most Searched smartphone  on KalpTaru</h1>

                      <div className={styles.divInsidGridContainer} >

                        <div className={styles.divInsidGrid} >
                          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_1._SY116_CB615734550_.jpg" alt="Redmi Series" />
                          <p>Redmi Series</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_2._SY116_CB615734550_.jpg" alt="Samsung M Series" />
                          <p>Samsung M Series</p>
                        </div>
                      </div>

                      <div className={styles.divInsidGridContainer}>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_3._SY116_CB615734550_.jpg" alt="One Plus Series" />
                          <p>One Plus Series</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_4._SY116_CB615734550_.jpg" alt="iQOO Series" />
                          <p>iQOO Series</p>
                        </div>
                      </div>
                    
                      <h1>See all offers</h1>
                      </GridItem>

                      <GridItem w='100%' h='350' bg='white' >
                      <h1 style={{fontWeight:"bold",fontSize:"17px"}} >Latest and upcoming launches on kalpTaru</h1>
                      <div className={styles.divInsidGridContainer} >

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116._SY116_CB615741130_.jpg" alt="iQOO 11 5G" />
                          <p>iQOO 11 5G</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116_2._SY116_CB615741130_.jpg" alt="Redmi Note 12 5G" />
                          <p>Redmi Note 12 5G</p>
                        </div>
                      </div>

                      <div className={styles.divInsidGridContainer}>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116_3._SY116_CB615741130_.jpg" alt="SamSung Galaxy" />
                          <p>SamSung Galaxy M04 5G</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116_4._SY116_CB615741130_.jpg" alt="Explore all new launch" />
                          <p>Explore all new launch</p>
                        </div>
                      </div>
                      
                      <h1>See all offers</h1>
                      </GridItem>

                      <GridItem w='100%' h='350' bg='white' >
                      <h1 style={{fontWeight:"bold",fontSize:"17px"}} >Starting Rs 199 | Men's Fashion</h1>
                      <div className={styles.divInsidGridContainer} >

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-clothing-186-116._SY116_CB615519226_.jpg" alt="Clothing" />
                          <p>Clothing</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-shoes-186-116._SY116_CB615519226_.jpg" alt="Footwear" />
                          <p>Footwear</p>
                        </div>
                      </div>

                      <div className={styles.divInsidGridContainer}>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-watch-186-116._SY116_CB615519226_.jpg" alt="Watchees" />
                          <p>Watchees</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-luggage-186-116._SY116_CB615519226_.jpg" alt="Bags & lauggage" />
                          <p>Bags & lauggage</p>
                        </div>
                      </div>
                      
                      <h1>See all offers</h1>
                      </GridItem>
                </Grid>
              </div>

          </div>
      </div>

      <div className={styles.details}  >
              <Grid templateColumns={{base:'repeat(1,1fr)',
              base:'repeat(1,1fr)',
              sm:'repeat(1,1fr)',
              md:'repeat(2,1fr)',
              lg:'repeat(4,1fr)'
              }} 
              gap={6}>
                      <GridItem w='100%' h='350' bg='white'>
                  <h1 style={{fontWeight:"bold",fontSize:"17px"}} >Book, Toyes & more</h1>
                      <div className={styles.divInsidGridContainer} >

                        <div className={styles.divInsidGrid} >
                          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Lifecycle/2L-coupons-PC-1x._SY116_CB615773334_.jpg" alt="" />
                          <p>Books Starting Rs.49</p>
                        </div>
                        <div className={styles.divInsidGrid} >
                          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Lifecycle/Buy-2-get-5-off-PC-1x._SY116_CB615773334_.jpg" alt="Toys Starting Rs.199" />
                          <p>Toys Starting Rs.199</p>
                        </div>
                      </div>

                      <div className={styles.divInsidGridContainer}>
                        <div className={styles.divInsidGrid} >

                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Lifecycle/No-cost-emi-PC-1x._SY116_CB615773334_.jpg" alt="Trimmers Starting Rs.349" />
                          <p>Trimmers Starting 349</p>
                        </div>

                        <div className={styles.divInsidGrid} >

                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/vernac-t/Janart/PC-QC-Jan-art-2023_VG_1x._SY116_CB615983641_.jpg" alt="Gaming Accessories" />
                          <p>Gaming Accessories</p>
                        </div>

                      </div>
                        
                      </GridItem>

                      <GridItem w='100%' h='350' bg='white' >
                      <h1 style={{fontWeight:"bold",fontSize:"17px"}} >Home Kitchen and More</h1>
                      <div className={styles.divInsidGridContainer} >
                     
                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_4._SY116_CB617449707_.jpg" alt="Home & decore" />
                          <p>Home & decore</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_6._SY116_CB617449707_.jpg" alt="Coockware & Dining" />
                          <p>Coockware & Dining</p>
                        </div>

                      </div>

                      <div className={styles.divInsidGridContainer}>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/OHL/JanART/Hero/1/PC_QuadCard_372X232_1_2x._SY116_CB615571575_.jpg" alt="Lawn & garden" />
                          <p>Lawn & garden</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_8._SY116_CB617449707_.jpg" alt="Home improvement" />
                          <p>Home improvement</p>
                        </div>

                      </div>
                      </GridItem>

                      <GridItem w='100%' h='350' bg='white' >
                      <h1 style={{fontWeight:"bold",fontSize:"17px"}} >Shope by brand</h1>
                      <div className={styles.divInsidGridContainer} >

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/JanART23/MSO/Tanya_MSOs/D68361814_INWLD_JanArt_PC_QuadCard_186x116_5._SY116_CB615718173_.jpg" alt="saving upto 11,000" />
                          <p>saving upto 11,000</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/JanART23/MSO/Tanya_MSOs/D68361814_INWLD_JanArt_PC_QuadCard_186x116_6._SY116_CB615718173_.jpg" alt="saving upto 11,000" />
                        <p>saving upto 11,000</p>
                        </div>

                      </div>

                      <div className={styles.divInsidGridContainer}>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/JanART23/MSO/Tanya_MSOs/D68361814_INWLD_JanArt_PC_QuadCard_186x116_7._SY116_CB615718173_.jpg" alt="saving upto 18,000" />
                        <p>saving upto 18,000</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/JanART23/MSO/Tanya_MSOs/D68361814_INWLD_JanArt_PC_QuadCard_186x116_8._SY116_CB615718173_.jpg" alt="saving upto 10,000" />
                        <p>saving upto 10,000</p>
                        </div>

                      </div>
                      </GridItem>

                      <GridItem w='100%' h='350' bg='white' >
                      <h1 style={{fontWeight:"bold",fontSize:"17px"}} >Women's Fashion</h1>
                      <div className={styles.divInsidGridContainer} >
                     
                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/W-clothing-186-116._SY116_CB615519226_.jpg" alt="Women's Clothing" />
                          <p>Women's Clothing</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/W-hand-186-116._SY116_CB615519226_.jpg" alt="Footwear + Handbags" />
                          <p>Footwear + Handbags</p>
                        </div>

                      </div>

                      <div className={styles.divInsidGridContainer}>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/W-beauty-186-116._SY116_CB615519226_.jpg" alt="Beauty" />
                          <p>Beauty</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/W-jewel-186-116._SY116_CB615519226_.jpg" alt="Fashiion jewellery" />
                          <p>Fashiion jewellery</p>
                        </div>

                      </div>
                      </GridItem>
              </Grid>
              </div>

              <div className={styles.details} >
              <Grid templateColumns={{base:'repeat(1,1fr)',
              base:'repeat(1,1fr)',
              sm:'repeat(1,1fr)',
              md:'repeat(2,1fr)',
              lg:'repeat(4,1fr)'
              }} 
              gap={6}>
                      <GridItem w='100%' h='350' bg='white'>
                      <h1 style={{fontWeight:"bold",fontSize:"17px"}} >Up to 65% off | Applianess for your home</h1>
                      <div className={styles.divInsidGridContainer} >

                      <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/JanART23/Hero/Updated/03-AC-PC-QC-1x._SY116_CB615774489_.jpg" alt="Air conditioners" />
                          <p>Air conditioners</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/JanART23/Hero/Updated/01-REF-PC-QC-1x._SY116_CB615774489_.jpg" alt="Refrigerators" />
                            <p>Refrigerators</p>
                      </div>

                      </div>

                      <div className={styles.divInsidGridContainer}>

                        <div className={styles.divInsidGrid} >
                          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/JanART23/Hero/Updated/04-MWO-PC-QC-1x._SY116_CB615774489_.jpg" alt="Microwaves" />
                          <p>Microwaves</p>
                        </div>

                        <div className={styles.divInsidGrid} >

                          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/JanART23/Hero/Updated/01-WM-PC-QC-1x._SY116_CB615774489_.jpg" alt="Washing Machines" />
                            <p>Washing Machines</p>
                        </div>

                      </div>
                    
                      <h1>See all offers</h1>
                      </GridItem>

                      <GridItem w='100%' h='350' bg='white' >
                      <h1 style={{fontWeight:"bold",fontSize:"17px"}} >Most Searched smartphone  on KalpTaru</h1>

                      <div className={styles.divInsidGridContainer} >

                        <div className={styles.divInsidGrid} >
                          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_1._SY116_CB615734550_.jpg" alt="Redmi Series" />
                          <p>Redmi Series</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_2._SY116_CB615734550_.jpg" alt="Samsung M Series" />
                          <p>Samsung M Series</p>
                        </div>
                      </div>

                      <div className={styles.divInsidGridContainer}>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_3._SY116_CB615734550_.jpg" alt="One Plus Series" />
                          <p>One Plus Series</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_4._SY116_CB615734550_.jpg" alt="iQOO Series" />
                          <p>iQOO Series</p>
                        </div>
                      </div>
                    
                      <h1>See all offers</h1>
                      </GridItem>

                      <GridItem w='100%' h='350' bg='white' >
                      <h1 style={{fontWeight:"bold",fontSize:"17px"}} >Latest and upcoming launches on kalpTaru</h1>
                      <div className={styles.divInsidGridContainer} >

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116._SY116_CB615741130_.jpg" alt="iQOO 11 5G" />
                          <p>iQOO 11 5G</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116_2._SY116_CB615741130_.jpg" alt="Redmi Note 12 5G" />
                          <p>Redmi Note 12 5G</p>
                        </div>
                      </div>

                      <div className={styles.divInsidGridContainer}>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116_3._SY116_CB615741130_.jpg" alt="SamSung Galaxy" />
                          <p>SamSung Galaxy M04 5G</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116_4._SY116_CB615741130_.jpg" alt="Explore all new launch" />
                          <p>Explore all new launch</p>
                        </div>
                      </div>
                      
                      <h1>See all offers</h1>
                      </GridItem>

                      <GridItem w='100%' h='350' bg='white' >
                      <h1 style={{fontWeight:"bold",fontSize:"17px"}} >Starting Rs 199 | Men's Fashion</h1>
                      <div className={styles.divInsidGridContainer} >

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-clothing-186-116._SY116_CB615519226_.jpg" alt="Clothing" />
                          <p>Clothing</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-shoes-186-116._SY116_CB615519226_.jpg" alt="Footwear" />
                          <p>Footwear</p>
                        </div>
                      </div>

                      <div className={styles.divInsidGridContainer}>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-watch-186-116._SY116_CB615519226_.jpg" alt="Watchees" />
                          <p>Watchees</p>
                        </div>

                        <div className={styles.divInsidGrid} >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-luggage-186-116._SY116_CB615519226_.jpg" alt="Bags & lauggage" />
                          <p>Bags & lauggage</p>
                        </div>
                      </div>
                      
                      <h1>See all offers</h1>
                      </GridItem>
                </Grid>
              </div>
    </>
  )
}

export default Home



