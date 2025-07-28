'use client';

import React from 'react';
import StickyBox from 'react-sticky-box';
import { CourseData } from '@/types/type';
import CourseBuy from './Home/CourseBuy';

const EnrollContent = ({ courseData }: { courseData: CourseData }) => {
  return (
    <StickyBox offsetTop={100} offsetBottom={80}>
      <CourseBuy courseData={courseData} />
    </StickyBox>
  );
};

export default EnrollContent;
