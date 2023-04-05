import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';

import HeroBanner from '../components/HeroBanner';
import SearchExsercises from '../components/SearchExsercises';


const Home = () => {
  return (
    <Box>
     <HeroBanner/>
     <SearchExsercises />
     <Exercises />
    </Box>
  )
}

export default Home
