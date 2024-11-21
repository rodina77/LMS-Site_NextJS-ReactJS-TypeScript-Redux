'use client'
import React from 'react';
import CoursesCard from '../components/Card';
import {items , recommendedItems , RatingItems , ViewedItems, ShortVideos , PersonalRecommend , newWebItems} from '@/coursesData';
import Header from '../components/Header';
import { Link, Typography } from '@mui/material';
import { CardHorizontal } from '../components/FlexBoxCard';
import ProgressLine from '../components/ProgressLine';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { languages } from '../languages';
import ResponsiveAppBar from '../components/navBar';
import Footer from '../components/Footer';

const Page = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en; 
  
  const renderCards= items.map( item => <CoursesCard key={item.id} item={item}/> )
  const renderRecommendedCards= recommendedItems.map( item => <CoursesCard key={item.id} item={item}/> )
  const renderViewedItems= ViewedItems.map( item => <CoursesCard key={item.id} item={item}/> )
  const renderShortItems= ShortVideos.map( item => <CoursesCard key={item.id} item={item}/> )
  const renderPersonalItems= PersonalRecommend.map( item => <CoursesCard key={item.id} item={item}/> )
  const renderNewItems= newWebItems.map( item => <CoursesCard key={item.id} item={item}/> )
  const renderRatingItems= RatingItems.map( item => <CoursesCard key={item.id} item={item}/> )
  return (
    <>
    <ResponsiveAppBar/>
    <Header/>
    <div className="container mx-auto px-5 py-2.5">
      <div style={{padding:'40px 0px'}}>
    <Typography variant='h4' sx={{padding:'20px 0px'}}>{t.start}</Typography>
    <div className='flex justify-between xl:flex-row lg:flex-row md:flex-col sm:flex-col'>
    <CardHorizontal imgUrl={'/imgs/Unofficial_JavaScript_logo_2.svg.png'} cardTitle={'React + JS + TS'} description={"Frontend Complete ReactJs Course For Beginners"} child={<ProgressLine/>}/>
   <div>
    <Link style={{textDecoration:'underline', color:'blue', fontWeight:'600'}} href="/myLearning">{t.myLearning}</Link>
  </div>
  </div>
    </div>
    <Typography variant='h3' sx={{padding:'20px 0px'}}>{t.learningNext}</Typography>
    <Typography variant='h6'>{t.causeViewed} “Ultimate Front-End Bootcamp: CSS, Bootstrap, JQ, JS, React”</Typography>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-20'>
       {renderCards}
    </div>

    <Typography variant='h5' sx={{padding:'10px 0px'}}>{t.recomended}</Typography>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-10'>
       {renderRecommendedCards}
    </div>

    <Typography variant='h5' sx={{padding:'10px 0px'}}>{t.recomendedForRating}</Typography>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-20'>
       {renderRatingItems}
    </div>
    <Typography variant='h5' sx={{padding:'10px 0px'}}>{t.LearnersAreView}</Typography>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-20'>
       {renderViewedItems}
    </div>
    <Typography variant='h5' sx={{padding:'10px 0px'}}>{t.sweetVideos}</Typography>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-20'>
       {renderShortItems}
    </div>
    <Typography variant='h5' sx={{padding:'10px 0px'}}>{t.personalRecommend}</Typography>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-20'>
       {renderPersonalItems}
    </div>
    <Typography variant='h5' sx={{padding:'10px 0px'}}>{t.newWeb}</Typography>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-20'>
       {renderNewItems}
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Page;
