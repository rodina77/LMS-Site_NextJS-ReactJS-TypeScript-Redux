import React from 'react';
import {  Card, Image, Text } from "@chakra-ui/react"
import { Item } from '@/coursesData';
import RatingIcons from './RatingIcons';
import { Link } from '@mui/material';

export interface IProps{
  item:Item;
}
const CoursesCard = ({item}:IProps) => {
  return (
    <>
    <Card.Root style={{backgroundColor:'white' , color:'black' , boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', padding:'10px'}} maxW="sm" overflow="hidden">
      <Image height={150}
        src={item.image}
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title style={{fontWeight:'bold'}}>
        <Link href={`/coursesDetails/${item.id}`}>
            {item.title}
          </Link>
          </Card.Title>
        <Card.Description>
          {item.description}
        </Card.Description>
        <RatingIcons/>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          E${item.price}
        </Text>

      </Card.Body>
    </Card.Root>
      
    </>
  );
}

export default CoursesCard;
