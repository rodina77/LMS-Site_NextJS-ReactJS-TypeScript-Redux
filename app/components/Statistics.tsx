import {Typography } from '@mui/material';
import React from 'react';

const Statistics = () => {
  return (
    <>

    <div className='container grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 sm:text-center justify-around' style={{backgroundColor:'#673ab7', color:'white' , padding:'45px 0px'}}>
    
        <div>
        <Typography variant='h2' style={{fontWeight:'bold'}}>73M</Typography>
        <Typography variant='body2'>students</Typography>
        </div>
        <div>
        <Typography variant='h2' style={{fontWeight:'bold'}}>75+</Typography>
        <Typography variant='body2'>Languages</Typography>
        </div>
        <div>
        <Typography variant='h2' style={{fontWeight:'bold'}}>1B</Typography>
        <Typography variant='body2'>Enrollments</Typography>
        </div>
        <div>
        <Typography variant='h2' style={{fontWeight:'bold'}}>180+</Typography>
        <Typography variant='body2'>Countries</Typography>
        </div>
        <div>
        <Typography variant='h2' style={{fontWeight:'bold'}}>16,000+</Typography>
        <Typography variant='body2'>Enterprise customers</Typography>
        </div>
    

    </div>
      
    </>
  );
}

export default Statistics;
