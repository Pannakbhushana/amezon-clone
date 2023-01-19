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
                      <GridItem w='100%' h='400' bg='blue.500' />
                      <GridItem w='100%' h='400' bg='blue.500' />
                      <GridItem w='100%' h='400' bg='blue.500' />
                      <GridItem w='100%' h='400' bg='blue.500' />
                </Grid>
              </div>

          </div>
      </div>
    </>
  )
}

export default Home



