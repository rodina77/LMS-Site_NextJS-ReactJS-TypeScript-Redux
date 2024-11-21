import React from 'react';
import { Carousel } from 'antd';


const CarouselSection: React.FC = () => (
  <Carousel autoplay>
    <div>
      <img src="/imgs/What-is-a-Learning-Management-System-01.jpg" alt="lms-image" style={{width:'100%' , height:'80vh'}}/>
    </div>
    <div>
    <img src="/imgs/types-of-lms.png" alt="lms-image" style={{width:'100%' , height:'80vh'}}/>
    </div>
    <div>
    <img src="/imgs/eLearning-management.jpg" alt="lms-image" style={{width:'100%' , height:'80vh'}}/>
    </div>
  </Carousel>
);

export default CarouselSection;