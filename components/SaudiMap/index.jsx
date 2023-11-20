import React from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import imgs from '../../assets/constants/imgs';
import Svg from '../SVGParts/Svg';
import { useRouter } from 'next/router';
import "react-multi-carousel/lib/styles.css";
import { useMapContext } from '@/context/MapContext';
import styles from './index.module.scss'
import { Container } from '@mui/material';
const SaudiMap = ({ }) => {
  const { landElments,
    setActiveIndex,
    setActiveLand,
    transformComponentRef,
    seIsPointsActive,
  } = useMapContext();


  const stateObj = {
    positionX: 0,
    positionY: 0,
    previousScale: 1,
    scale: 1,

  }



  return (
    <>



      <div className={styles.map_boxes} id='map-boxes'>
        <TransformWrapper
          transform={`translate(-98.2px, 19.8px) scale(0.8)`}
          ref={transformComponentRef}
          wheel={{ wheelDisabled: true }}
          zoomIn={{ step: 100 }}
          zoomOut={{ step: 100 }}
          centerOnInit={false}
          minScale={0.5}
          maxScale={1.4}
          initialScale={1}
          doubleClick={{ disabled: false, mode: "reset" }}

        >


          {({ zoomIn, zoomOut, resetTransform }) => (

            <>
              <div className={styles.tools}>
                <button onClick={() => {
                  resetTransform();
                  setActiveIndex(null);
                  setActiveLand(null);
                  seIsPointsActive(false);

                  landElments.forEach((element) => {
                    element.classList.remove('activeLand', 'hiddenPoints');
                  });

                }}>Reset</button>






              </div>

              <TransformComponent>
                <Svg />
              </TransformComponent>
            </>
          )
          }
        </TransformWrapper >



      </div >

    </>


  )
}

export default SaudiMap
