import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { languages } from '../languages';
import { RootState } from '../store/store';

const ListsPage = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en; 
  return (
    <>
    <div className='m-28 text-center'>
      <h2>{t.organize}</h2>
      <Link href="/homePage" style={{color:'blue', fontWeight:'bold'}}>{t.goToCourses}</Link> {t.createCourse}
    </div>
      
    </>
  );
}

export default ListsPage;
