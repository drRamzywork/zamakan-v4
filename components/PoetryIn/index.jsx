import React, { useState } from 'react'
import styles from './index.module.scss'
import { Container, Typography } from '@mui/material'
import { Button } from '@mui/base'
import localFont from 'next/font/local'
import imgs from '../../assets/constants/imgs';
import SaudiMap from "@/components/SaudiMap";
import Link from 'next/link'

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

const PoetryIn = () => {
  const [activeLand, setActiveLand] = useState(null);
  const { ra3y } = imgs;





  return (
    <div dir='rtl' id='PoetryIn' className={styles.PoetryIn} style={...Effra.style}>
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
        <div className={styles.sec_container} >

          <div className={styles.text_container}>
            <div className={styles.sec_title}>
              <Typography variant='h3'>
                أبرز ما قيل في المملكة
              </Typography>
            </div>
            <div className={styles.sec_info}>
              <div className={styles.inner_info}>
                <div className={styles.tag}>
                  <Typography>المملكة</Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    مقـــــيم على
                    {` `}
                    <span>
                      بنبــــــان
                    </span>
                    {` `}
                    يمنــــع مـــــاءه
                    وماء وشيع ماء عطشان مرمل
                  </Typography>
                </div>
                <hr />
                <div className={styles.poet_info}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="" />
                  </div>

                  <div className={styles.text_container}>
                    <div className={styles.name}>
                      <Typography>الراعي</Typography>
                    </div>
                    <div className={styles.tag}>
                      <Typography>
                        العصر الأموي
                      </Typography>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.explore}>

              <div className={styles.sec_title}>
                <Typography variant='h3'>
                  مناطق الرياض
                </Typography>
              </div>

              <div className={styles.tags_container}>
                <Button >
                  <Link href='/city'>
                    بنبان
                  </Link>
                </Button>

                <Button >
                  <Link href='/city'>
                    حومل
                  </Link>
                </Button>

                <Button >
                  <Link href='/city'>
                    وجرة
                  </Link>
                </Button>

                <Button >
                  <Link href='/city'>
                    سقط اللوى
                  </Link>
                </Button>

                <Button >
                  <Link href='/city'>
                    الصفاح
                  </Link>
                </Button>

                <Button >
                  <Link href='/city'>
                    فيد
                  </Link>
                </Button>

                <Button >
                  <Link href='/city'>
                    العذيب
                  </Link>
                </Button>
              </div>
            </div>







          </div>
          <SaudiMap dir='ltr' activeLand={activeLand} />

        </div>



      </Container>

    </div >
  )
}

export default PoetryIn 