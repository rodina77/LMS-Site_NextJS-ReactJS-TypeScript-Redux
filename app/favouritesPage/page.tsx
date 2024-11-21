'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { Card } from 'antd';
import { Container, Typography } from '@mui/material';
import EmptyCart from '../EmptyCartPage/page';
import { removeFromFavorites } from '../store/favouriteSlice'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import { languages } from '../languages';

const Favorites = () => {
  const dispatch = useDispatch();
  
  // Retrieve favorite courses from the Redux store
  const favoriteCourses = useSelector((state: RootState) => state.favorites.items);
  
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en;
  // Local state to manage whether the component has been mounted
  const [isMounted, setIsMounted] = useState(false);

  // Set the component as mounted once it's rendered on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent rendering of the component on the server side
  if (!isMounted) return null;

  const handleRemoveFromFavorites = (id: number) => {
    console.log("Removing course from favorites:", id);
    dispatch(removeFromFavorites(id));
  };


  return (
    <Container>
      <Typography variant="h4" style={{ textAlign: 'center', fontWeight: '900', padding: '20px 0px', color: '#673ab7' }}>
        {t.FavCourses}
      </Typography>
      {favoriteCourses.length === 0 ? (
        <EmptyCart title={"There are No Favorite Courses"} coursesCount={"0 Favorites"}/>
      ) : (
        favoriteCourses.map(course => (
          <Card key={course.id} style={{ marginBottom: 20 }}>
            <div className='flex justify-between'>
              <div className='flex gap-3'>
                <div>
                  <img src={course.imgSrc} alt={course.title} style={{ width: '200px', height: 'auto' }} />
                </div>
                <div>
                  <Typography variant="h6" fontWeight={700} color={'#673ab7'}>
                    {course.title}
                  </Typography>
                  <Typography variant="h6" fontWeight={200} color={'gray'}>
                    your Favorite Course is here
                  </Typography>
                  <Typography variant="h6">${course.price}</Typography>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FavoriteIcon 
                  onClick={() => handleRemoveFromFavorites(course.id)} 
                  style={{ cursor: 'pointer', color: '#673ab7' }} 
                />
              </div>
            </div>
          </Card>
        ))
      )}
    </Container>
  );
};

export default Favorites;
