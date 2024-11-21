import { Box, Card, Image } from "@chakra-ui/react";
import { ReactNode } from "react";
import GroupsIcon from '@mui/icons-material/Groups';
import TocIcon from '@mui/icons-material/Toc';
import { Link, Typography } from "@mui/material";

interface IProps {
  id?: number;
  imgUrl: string;
  cardTitle: string;
  description: string;
  child?: ReactNode;
  students?: string;
  courses?: number;
}

export const CardHorizontal = ({ id, imgUrl, cardTitle, description, child, students, courses }: IProps) => (
  <div className="flex justify-between">
    <Card.Root
      maxW="xl"
      style={{
        margin: '30px 0px',
        backgroundColor: 'white',
        border: '1px solid #e0e0e0',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      }}
    >
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }} 
        overflow="hidden"
        width="100%"
      >
        <Image
          objectFit="cover"
          width={{ base: '100%', md: 200 }}
          height={{ base: 'auto', md: 200 }}
          src={imgUrl}
          alt="Card Image"
          mb={{ base: 4, md: 0 }} 
        />
        <Box p={4} width="100%">
          <Card.Body style={{ backgroundColor: 'white' }}>
            <Card.Title mb="2" style={{ color: 'black' }}>
              <Link href={`/instructorPage/${id}`} style={{ color: 'black' }}>
                {cardTitle}
              </Link>
            </Card.Title>
            <Card.Description>{description}</Card.Description>
            {child}
          </Card.Body>
          <Card.Footer style={{ color: 'gray' }}>
            <Typography sx={{ display: 'block' }}>
              <GroupsIcon /> {students}
            </Typography>
            <Typography sx={{ display: 'block' }}>
              <TocIcon /> {courses}
            </Typography>
          </Card.Footer>
        </Box>
      </Box>
    </Card.Root>
  </div>
);
