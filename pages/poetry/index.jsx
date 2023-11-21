import { Container, Typography } from '@mui/material'
import React, { useRef } from 'react'
import imgs from '../../assets/constants/imgs';
import { Navigation, Pagination, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";
import styles from './index.module.scss'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const Poetry = () => {
  const { ra3y, Feather_big, place } = imgs;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <Navbar />
      <section id={styles.poetry_page}>
        <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
          <div className={styles.slider_container}>
            <div className={'sec_title'}>
              <Typography>بيت الشعر</Typography>
            </div>
            <div className={styles.slider}>
              <Swiper
                modules={[Navigation,]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}

                spaceBetween={0}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
                }}


                dir='rtl'
                className={styles.swiper_container}>
                <SwiperSlide>
                  <div className={styles.box}>
                    <div className={styles.img_container}>
                      <img src={Feather_big.src} alt="" />
                    </div>
                    <div className={styles.text_container}>
                      <Typography>مقيم على بنبان يمنع ماءه</Typography>
                      <span>... </span>
                      <Typography>وماء وشيع ماء عطشان مرمل</Typography>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.box}>
                    <div className={styles.img_container}>
                      <img src={Feather_big.src} alt="" />
                    </div>
                    <div className={styles.text_container}>
                      <Typography>مقيم على بنبان يمنع ماءه</Typography>
                      <span>... </span>
                      <Typography>وماء وشيع ماء عطشان مرمل</Typography>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.box}>
                    <div className={styles.img_container}>
                      <img src={Feather_big.src} alt="" />
                    </div>
                    <div className={styles.text_container}>
                      <Typography>مقيم على بنبان يمنع ماءه</Typography>
                      <span>... </span>
                      <Typography>وماء وشيع ماء عطشان مرمل</Typography>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.box}>
                    <div className={styles.img_container}>
                      <img src={Feather_big.src} alt="" />
                    </div>
                    <div className={styles.text_container}>
                      <Typography>مقيم على بنبان يمنع ماءه</Typography>
                      <span>... </span>
                      <Typography>وماء وشيع ماء عطشان مرمل</Typography>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.box}>
                    <div className={styles.img_container}>
                      <img src={Feather_big.src} alt="" />
                    </div>
                    <div className={styles.text_container}>
                      <Typography>مقيم على بنبان يمنع ماءه</Typography>
                      <span>... </span>
                      <Typography>وماء وشيع ماء عطشان مرمل</Typography>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <hr />
            <div className={styles.poet_info}>
              <div className={styles.img_container}>
                <img src={ra3y.src} alt="" />
              </div>
              <div className={styles.text_container}>
                <div className={styles.name}>
                  <Typography>
                    كثير عزة
                  </Typography>

                </div>
                <div className={styles.tag}>
                  <Typography>العصر الأموي</Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section >
      <Footer />

    </>

  )
}

export default Poetry