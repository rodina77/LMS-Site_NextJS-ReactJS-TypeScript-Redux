import React from 'react';
import {
  BreadcrumbLink,
  BreadcrumbRoot,
} from "@/components/ui/breadcrumb"
import { Container, Typography } from '@mui/material';
import RatingIcons from './RatingIcons';
import PricingCard from './PriceCard';

interface IProps {
  videoID: number;
  title: string;
  description: string;
  rating: string;
  imgSrc: string;
  details: string;
  price: string;
  quantity?: number;
}

const DetailsPageHeader = ({ videoID, title, description, rating, imgSrc, price, details }: IProps) => {
  return (
    <div className="bg-slate-800 text-white p-9">
      {/* Container with responsive flex layout */}
        <BreadcrumbRoot className="mb-4 lg:mb-0">
          <BreadcrumbLink href="/homePage" className="text-white">Home</BreadcrumbLink>
          <BreadcrumbLink href="#" className="text-white">Course Detail Page</BreadcrumbLink>
        </BreadcrumbRoot>

      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }} className="flex flex-col lg:flex-row">

        <div className="w-full mb-6 lg:mb-0">
          <Typography variant="h3" fontWeight={900} className="text-xl sm:text-3xl md:text-4xl">{title}</Typography>
          <Typography variant="h6" className="text-sm sm:text-base md:text-lg">{description}</Typography>
          <Typography variant="h6" className="text-sm sm:text-base md:text-lg" style={{ margin: '20px 0px' }}>{details}</Typography>

          <div className="flex flex-wrap gap-2 items-center">
            <a href="#" className="text-sm sm:text-base md:text-lg">({rating}) Rating,</a>
            <p className="text-sm sm:text-base md:text-lg">178,813 students</p>
            <RatingIcons />
          </div>
        </div>

      
      
          <PricingCard id={videoID} imgSrc={imgSrc} price={price} title={title} quantity={0} />
      

      </Container>
    </div>
  );
}

export default DetailsPageHeader;
