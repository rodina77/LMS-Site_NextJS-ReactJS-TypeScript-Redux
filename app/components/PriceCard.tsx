"use client";
import React, { useState } from 'react'; 
import { Card } from 'antd';
import { Button, Link, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { addToFavorites } from '../store/favouriteSlice';
import { RootState } from '../store/store';
import { languages } from '../languages';
import toast from "react-hot-toast";

interface IProps {
  id: number;
  title: string;
  imgSrc: string;
  price: string;
  quantity: number;
}

const PricingCard = ({ id, imgSrc, title, price, quantity }: IProps) => {
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en; 

  const dispatch = useDispatch();
  const [isFavorited, setIsFavorited] = useState(false); 

  const handleAddToCart = () => {
    const course = { id, imgSrc, price, title, quantity };
    console.log("Course added to cart:", course);
    dispatch(addToCart(course));
    toast.success("Course added to cart! 🎉"); 
  };

  const handleFavoriteToggle = () => {
    const course = { id, imgSrc, price, title };
    if (!isFavorited) {
      console.log("Attempting to add course to favorites:", course);
      dispatch(addToFavorites(course));
      toast.success("Course added to Favorites! 💜"); 
    } else {
      console.log("Attempting to remove course from favorites:", course);
    }
    setIsFavorited(!isFavorited);
  };

  return (
    <Card
      hoverable
      className='w-96'
      cover={<img alt="course" src={imgSrc} />}
    >
      <Typography variant="h4" style={{ margin: '10px 0' }}>
        ${price}
      </Typography>
      <Button
        style={{
          width: '100%',
          backgroundColor: 'white',
          border: '1px solid black',
          color: '#673ab7',
          margin: '10px 0',
        }}
      >
        <Link style={{ color: '#673ab7', textDecoration: 'none' }} href={`/coursesDetails/${id}/${id}`}>
          {t.previewCourse}
        </Link>
      </Button>
      <div className='flex gap-2'>
      <Button
        style={{
          width: '100%',
          backgroundColor: '#673ab7',
          color: 'white',
          margin: '10px 0',
        }}
        onClick={handleAddToCart}
      >
        <ShoppingCartIcon /> {t.addToCart}
      </Button>
      <Button
        style={{
          width: '10%',
          backgroundColor: 'white',
          border: '1px solid #673ab7',
          color: '#673ab7',
          margin: '10px 0',
        }}
        onClick={handleFavoriteToggle} 
      >
        {isFavorited ? (
          <FavoriteIcon /> 
        ) : (
          <FavoriteBorderIcon /> 
        )}
      </Button>
      </div>
    </Card>
  );
};

export default PricingCard;
