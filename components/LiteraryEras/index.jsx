import { Container, Typography, } from '@mui/material'
import React from 'react'
import localFont from 'next/font/local'
import styles from './index.module.scss'
import { useMapContext } from '@/context/MapContext';
import PoetryIn from '../PoetryIn';
import imgs from '../../assets/constants/imgs'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';

const Effra = localFont({
  src: [
    {
      path: '../../fonts/Effra_Md.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_Heavy.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_Rg.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

const LiteraryEras = () => {
  const { smallMap,
    SaudiMap,
    adag,
    bari,
    madiinah,
    makkah,
    qassim,
    salaan,
    tabuuk,
  } = imgs


  const {
    activeIndex,
    setActiveIndex,
    setActiveLand,
    resetTransform,
    seIsPointsActive,
    landElments,
    handleZoomToLand, } = useMapContext();


  const landData = [
    { name: 'الرياض', image: smallMap },
    { name: 'مكة المكرمة', image: makkah },
    { name: 'المدينة المنورة', image: madiinah },
    { name: 'الشرقية', image: bari },
    { name: 'القصيم', image: qassim },
    { name: 'عسير', image: adag },
    { name: 'حائل', image: salaan },
    { name: 'تبوك', image: tabuuk },
    { name: 'الرياض', image: smallMap },
    { name: 'مكة المكرمة', image: makkah },
    { name: 'المدينة المنورة', image: madiinah },
    { name: 'الشرقية', image: bari },
    { name: 'القصيم', image: qassim },
    { name: 'عسير', image: adag },
    { name: 'حائل', image: salaan },
    { name: 'تبوك', image: tabuuk },
    { name: 'الرياض', image: smallMap },
    { name: 'مكة المكرمة', image: makkah },
    { name: 'المدينة المنورة', image: madiinah },
    { name: 'الشرقية', image: bari },
    { name: 'القصيم', image: qassim },
    { name: 'عسير', image: adag },
    { name: 'حائل', image: salaan },
    { name: 'تبوك', image: tabuuk },
  ];


  return (

    < section id='LiteraryEras' className={styles.LiteraryEras} style={...Effra.style}>
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false} className='disable_container'>
        <div className={styles.sec_container}>
          <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
            <div className={styles.sec_title}>
              <Typography variant='h3'>
                مناطق المملكة
              </Typography>
            </div>
          </Container>

          <div className={styles.slider_container}>
            <Swiper
              scrollbar={{
                hide: true,
              }}
              modules={[Scrollbar]}

              dir="rtl"
              breakpoints={{
                300: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                400: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 9.1,
                  spaceBetween: 40,

                },
              }}

              pagination={true} className="mySwiper">
              <SwiperSlide>
                <div className={`${styles.slider} ${activeIndex === null ? styles.active : ''}`} onClick={() => {
                  resetTransform();
                  setActiveIndex(null);
                  setActiveLand(null);
                  seIsPointsActive(false);

                  landElments.forEach((element) => {
                    element.classList.remove('activeLand', 'hiddenPoints');
                  });
                }} >

                  <div className={styles.img_container}>
                    <img src={SaudiMap.src} alt='المملكة' />
                  </div>

                  <div className={styles.name}>
                    <Typography>المملكة</Typography>
                  </div>

                </div>
              </SwiperSlide>

              {Array.from({ length: landElments.length }).map((_, index) => (
                <SwiperSlide>
                  <div className={`${styles.slider} ${index === activeIndex ? styles.active : ''}`} key={index} onClick={() => handleZoomToLand(index)}>
                    <div className={styles.img_container}>
                      <img src={landData[index]?.image.src} alt='المملكة' />
                    </div>
                    <div className={styles.name}>
                      <Typography>{landData[index]?.name}</Typography>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>




          </div>
        </div>
      </Container>

      <div className={styles.map_container}>
        <PoetryIn />
      </div>

    </section >
  )
}

export default LiteraryEras











