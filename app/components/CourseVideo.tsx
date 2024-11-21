import React from 'react';
import AccordionComponent from './Accordion';
import { Typography } from '@mui/material';
import LearningTools from '../learningTools/page';

interface IProps {
  video: string | undefined;
  courseContent?: {
    [key: string]: {
      title: string;
      lessons: string[];
    };
  };
}

const CourseVideo = ({ video, courseContent }: IProps) => {
  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
        <div className="w-full">
          <video controls className="w-full">
            <source src={video} />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="w-full">
          <Typography variant="h4" paddingTop={3}>Course Content</Typography>
          <AccordionComponent courseContent={courseContent} />
        </div>
      </div>

      <div className="p-5">
        <LearningTools />
      </div>
    </>
  );
}

export default CourseVideo;
