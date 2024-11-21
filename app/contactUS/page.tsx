'use client'
import { Container, Typography } from '@mui/material';
import React from 'react';
import OfficeCard from '../components/OfficeCard';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { languages } from '../languages';
import ResponsiveAppBar from '../components/navBar';
import Footer from '../components/Footer';
const Page = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en; 
  return (
    <>
    <ResponsiveAppBar/>
    <div>
      <Container>
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 p-20 sm:grid-cols-1 gap-4'>
          <div className='flex flex-col justify-center'>
            <Typography variant='h3' fontWeight={500}>{t.contact}</Typography>
          </div>
          <div>
            <img style={{paddingTop:'20px'}} src="/imgs/sc_edu_securityblock.webp" alt="contact_img" />
          </div>

        </div>
        <div className='text-center my-32'>
        <Typography variant='h3' style={{fontFamily:'Suisse Works, Georgia, Times, Times New Roman, serif', paddingBottom:'20px'}} fontWeight={900}>{t.OurOrigin}</Typography>
        <Typography variant='body2' style={{width:'500px' , margin:'auto'}}>Growing up in a small Turkish village, Udemy founder Eren Bali had few educational opportunities — until he got a computer. Fueled by his dream to compete in mathematics, he used the internet to learn his way to a silver medal in the International Math Olympiad.</Typography>
        <Typography variant='body2' style={{width:'500px' , margin:'auto', paddingTop:'20px'}}>After learning online changed his life, Eren partnered with co-founders Oktay Caglar and Gagan Biyani to achieve a common goal: to make quality education accessible to all.</Typography>
        </div>

              <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-5'>
        <div className="flex flex-col justify-center md:order-2"> {/* Reverse order for md and sm */}
          <Typography variant='h4' style={{fontFamily:'Suisse Works, Georgia, Times, Times New Roman, serif'}} fontWeight={900}>
            {t.HowWeStart}
          </Typography>
          <Typography variant='body2'>
            Growing up in a small town, he got a computer to make quality education accessible to all.
          </Typography>
        </div>
        <div>
          <video 
            src="/Videos/856166-sd_640_360_25fps.mp4" 
            controls 
            poster='/imgs/logo-udemy-purple-animation.gif'
          ></video>
        </div>
      </div>

        <div className='text-center py-36'>
        <Typography variant='h4' style={{fontFamily:'Suisse Works, Georgia, Times, Times New Roman, serif'}} fontWeight={900}>{t.ContactUS}</Typography>
        <Typography variant='body2'>The quickest way to get in touch with us is by using the contact information below.</Typography>

        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 py-20 justify-between'>
          <div className='text-left'>
            <Typography>Privacy</Typography>
            <hr style={{color:'black', lineHeight:'20px', padding:'10px 0px'}} />
            <Typography>Email <a style={{color:'blue'}} href="mailto:privacy@udemy.com">privacy@udemy.com</a></Typography>
            <Typography>Udemy, Inc.</Typography>
            <Typography>Attn: Legal.</Typography>
            <Typography>600 Harrison Street, 3rd Floor</Typography>
            <Typography>San Francisco, CA 94107</Typography>
          </div>
          <div className='text-left'>
            <Typography>European Union Authorities & Trusted Flaggers</Typography>
            <hr style={{color:'black', lineHeight:'20px' , padding:'10px 0px'}} />
            <Typography>Email <a style={{color:'blue'}} href="mailto:dsacompliance@udemy.com">dsacompliance@udemy.com</a></Typography>
            <Typography>Udemy, Inc.</Typography>
            <Typography>Attn: Legal.</Typography>
          </div>
          <div className='text-left'>
            <Typography>Press</Typography>
            <hr style={{color:'black', lineHeight:'20px', padding:'10px 0px'}} />
            <Typography>Email <a style={{color:'blue'}} href="mailto:press@udemy.com">press@udemy.com</a></Typography>
            <Typography>View Digital Services Act Information
            .</Typography>
            <Typography>Report Illegal Content Form.</Typography>
          </div>
        </div>


<Typography variant='h4' style={{fontFamily:'Suisse Works, Georgia, Times, Times New Roman, serif'}} fontWeight={900}>{t.offices}</Typography>

        <div className='grid lg:grid-cols-3 gap-4'>
          <OfficeCard imgUrl={'/imgs/san-francisco-460x350.jpeg'} title={'San Francisco, CA'}/>
          <OfficeCard imgUrl={'/imgs/denver-460x350.jpeg'} title={'Denver, CO'}/>
          <OfficeCard imgUrl={'/imgs/dublin-1-460x350.jpeg'} title={'Dublin, Ireland'}/>
          <OfficeCard imgUrl={'/imgs/ankara-1-450x350.jpeg'} title={'Ankara, Türkiye'}/>
          <OfficeCard imgUrl={'/imgs/Austin-480x350.png'} title={'Austin, TX'}/>
          <OfficeCard imgUrl={'/imgs/Melbourne-480x350.png'} title={'Melbourne, Australia'}/>
          <OfficeCard imgUrl={'/imgs/Istanbul-480x350.png'} title={'Istanbul, Türkiye'}/>
          <OfficeCard imgUrl={'/imgs/Gurgaon-480x350.png'} title={'Gurgaon, India'}/>
          <OfficeCard imgUrl={'/imgs/office-locations-mumbai.jpg'} title={'Mumbai, India'}/>
          <OfficeCard imgUrl={'/imgs/office-locations-chennai.jpg'} title={'Chennai, India'}/>
          <OfficeCard imgUrl={'/imgs/CDMX-office-location-480x350.jpg'} title={'CDMX, Mexico'}/>
        </div>
        </div>
      </Container>

    </div>
    <Footer/>
    </>
  );
}

export default Page;
