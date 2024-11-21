import React from 'react';
import { Card } from 'antd';
import { Typography } from '@mui/material';
import RatingIcons from './RatingIcons';

const VideoCard: React.FC = () => (
  <Card
    hoverable
    style={{ width: 240, margin: '20px 0px' }}
    cover={<img alt="example" src="/imgs/Unofficial_JavaScript_logo_3.svg.png" />}
  >
    <Typography variant='body2'>Pro Frontend Engineer Course Using Reactjs + TypeScript</Typography>
    <Typography variant='body2' sx={{fontSize:'10px', color:'gray'}}>Lets start our journey</Typography>
    <div className='flex justify-between mt-3'>
      <RatingIcons />
    </div>
  </Card>
);

export default VideoCard;
