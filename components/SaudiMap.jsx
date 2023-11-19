import imgs from '../assets/constants/imgs';
import React, { useEffect, useState, useRef } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Typography } from '@mui/material';
import Svg from './SVGParts/Svg';
import { useRouter } from 'next/router';

const SaudiMap = () => {
  const { smallMap, SaudiMap } = imgs;

  const router = useRouter();


  const containerRef = useRef(null);
  const handleClick = () => {
    // Navigate to the specified route
    router.push('/city');
  };



  useEffect(() => {
    const elements = document.querySelectorAll('.city-name');
    const container = containerRef.current;

    elements.forEach((element) => {
      element.addEventListener('click', () => {
        handleClick();
      });
    });

    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         // Add the "animate" class to the elements when the container is in the viewport
    //         elements.forEach((element) => {
    //           element.classList.add('animate');
    //         });
    //       } else {
    //         // Remove the "animate" class from the elements when the container is out of the viewport
    //         elements.forEach((element) => {
    //           element.classList.remove('animate');
    //         });
    //       }
    //     });
    //   },
    //   {
    //     threshold: 0.5, // Trigger animation when 50% of the container is in the viewport
    //   }
    // );

    // // Observe the container
    // observer.observe(container);

    // return () => {
    // Cleanup when the component unmounts
    // observer.disconnect();
    // };
  }, []);


  // SVG ZOOM
  const [landElments, setLandElemnts] = useState([])
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLand, setActiveLand] = useState(null);

  const [isPointsActive, seIsPointsActive] = useState(false);


  useEffect(() => {
    // Select all elements with the class name .land
    const elements = document.querySelectorAll('.land');
    setLandElemnts(elements)

    // Add dynamic IDs to the selected elements
    elements.forEach((element, index) => {
      element.setAttribute('id', `land-${index}`);
    });
  }, []);


  const transformComponentRef = useRef(null);
  const handleZoomToLand = (landIndex) => {
    const elementId = `land-${landIndex}`;
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement(elementId);
    }
    setActiveIndex(landIndex); // Set the active index
    seIsPointsActive(false)
  };


  useEffect(() => {
    const dataIndex = document.querySelectorAll(`#land-${activeIndex}`)[0];
    const elementsWithLandClassOnly = document.querySelectorAll('.land:not(.activeLand)');

    if (activeLand) {
      activeLand.classList.remove('activeLand');
      seIsPointsActive(false)


    }

    if (dataIndex) {
      setActiveLand(dataIndex);
      dataIndex.classList.add('activeLand');
      seIsPointsActive(true)
    }

    if (isPointsActive === true) {
      elementsWithLandClassOnly.forEach((element) => {
        element.classList.add('hiddenPoints');
      });
    } else {
      elementsWithLandClassOnly.forEach((element) => {
        element.classList.remove('hiddenPoints');
      });

    }

  }, [activeIndex, activeLand])




  return (
    <>

      <div id='map-boxes'>
        <TransformWrapper
          ref={transformComponentRef}
          initialScale={1}
          wheel={{ wheelDisabled: true }}

          minScale={0.5}
          maxScale={1}
          pan={{ disabled: false }}
          zoomIn={{ step: 100 }}
          zoomOut={{ step: 100 }}
          centerZoomedOut={true}


        >
          {({ zoomIn, zoomOut, resetTransform }) => (

            <>
              <div className="tools">
                <button onClick={() => zoomIn()}>Zoom In</button>
                <button onClick={() => zoomOut()}>Zoom Out</button>
                <button onClick={() => {
                  resetTransform();
                  setActiveIndex(null);
                  setActiveLand(null);
                  seIsPointsActive(false);
                  landElments.forEach((element) => {
                    element.classList.remove('activeLand', 'hiddenPoints');
                  });

                  // setActiveLand(null)
                  // seIsPointsActive(false)

                  // if (activeLand) activeLand.classList.remove('activeLand');
                  // if (activeLand) activeLand.classList.remove('hiddenPoints');

                }}>Reset</button>


                <div className={`box ${activeIndex === null ? 'active' : ''}`} onClick={() => {
                  resetTransform();
                  setActiveIndex(null);
                  setActiveLand(null);
                  seIsPointsActive(false);

                  landElments.forEach((element) => {
                    element.classList.remove('activeLand', 'hiddenPoints');
                  });
                }}>
                  <div className={"img_container"}>
                    <img src={smallMap.src} alt="الرياض" />
                  </div>
                  <div className={"name"}>
                    <Typography>المملكة</Typography>
                  </div>
                </div>

                {Array.from({ length: landElments.length }).map((_, index) => (

                  <div className={`box ${index === activeIndex ? 'active' : ''}`} key={index} onClick={() => handleZoomToLand(index)}>
                    <div className={"img_container"}>
                      <img src={smallMap.src} alt="الرياض" />
                    </div>
                    <div className={"name"}>
                      <Typography>الرياض Zoom to Land {index + 1}</Typography>
                    </div>
                  </div>

                ))}
              </div>

              <TransformComponent>
                <Svg />

              </TransformComponent>
            </>
          )}
        </TransformWrapper >



      </div >

    </>


  )
}

export default SaudiMap



// import React, { useEffect, useState, useRef } from 'react';
// import { Typography } from '@mui/material';
// import Svg from './SVGParts/Svg';
// import { useRouter } from 'next/router';
// import { TweenMax, gsap, } from 'gsap';

// const SaudiMap = () => {
//   const { smallMap } = imgs;
//   const router = useRouter();
//   const containerRef = useRef(null);
//   const [landElements, setLandElements] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [activeLand, setActiveLand] = useState(null);
//   const [isPointsActive, setIsPointsActive] = useState(false);

//   useEffect(() => {
//     const elements = document.querySelectorAll('.city-name');
//     const container = containerRef.current;

//     elements.forEach((element) => {
//       element.addEventListener('click', () => {
//         handleClick();
//       });
//     });

//     // Draggable.create(container, { type: 'x,y', edgeResistance: 0.65, throwProps: true });

//     setLandElements(document.querySelectorAll('.land'));


//   }, []);

//   // useEffect(() => {
//   //   const dataIndex = document.querySelectorAll(`#land-${activeIndex}`)[0];
//   //   const elementsWithLandClassOnly = document.querySelectorAll('.land:not(.activeLand)');

//   //   if (activeLand) {
//   //     TweenMax.to(activeLand, 0.5, { scale: 1 }); // Zoom out the previously active land
//   //     activeLand.classList.remove('activeLand');
//   //     setIsPointsActive(false);
//   //   }

//   //   if (dataIndex) {
//   //     TweenMax.to(dataIndex, 0.5, { scale: 1.5 }); // Zoom in the newly active land
//   //     setActiveLand(dataIndex);
//   //     dataIndex.classList.add('activeLand');
//   //     setIsPointsActive(true);
//   //   }

//   //   if (isPointsActive) {
//   //     elementsWithLandClassOnly.forEach((element) => {
//   //       gsap.to(element, { scale: 1, duration: 0.2 });

//   //       element.classList.add('hiddenPoints');
//   //     });
//   //   } else {
//   //     elementsWithLandClassOnly.forEach((element) => {
//   //       gsap.to(element, { scale: 1, duration: 0.2 });

//   //       element.classList.remove('hiddenPoints');
//   //     });
//   //   }
//   // }, [activeIndex, activeLand, isPointsActive]);


//   useEffect(() => {
//     const dataIndex = document.querySelectorAll(`#land-${activeIndex}`)[0];
//     const elementsWithLandClassOnly = document.querySelectorAll('.land:not(.activeLand)');

//     if (activeLand) {
//       activeLand.classList.remove('activeLand');
//       setIsPointsActive(false)
//     }

//     if (dataIndex) {
//       setActiveLand(dataIndex);
//       dataIndex.classList.add('activeLand');

//       setIsPointsActive(true)
//     }

//     if (isPointsActive === true) {
//       elementsWithLandClassOnly.forEach((element) => {
//         element.classList.add('hiddenPoints');

//       });
//     } else {
//       elementsWithLandClassOnly.forEach((element) => {
//         element.classList.remove('hiddenPoints');
//       });

//     }

//   }, [activeIndex, activeLand])



//   useEffect(() => {
//     // Select all elements with the class name .land
//     const elements = document.querySelectorAll('.land');
//     setLandElements(elements)

//     // Add dynamic IDs to the selected elements
//     elements.forEach((element, index) => {
//       element.setAttribute('id', `land-${index}`);
//     });
//   }, []);
//   const handleClick = () => {
//     router.push('/city');
//   };


//   // const handleZoomToLand = (landIndex) => {
//   //   const activeLandElement = document.querySelector('.activeLand');

//   //   if (activeLandElement) {

//   //   }

//   //   setActiveIndex(landIndex);
//   //   setIsPointsActive(false);
//   // };

//   const handleZoomToLand = (landIndex) => {
//     const activeLandElement = document.querySelector('.activeLand');

//     if (activeLandElement) {
//       const svgElement = document.getElementById('svg1');

//       // Use GSAP to zoom in on the SVG element
//       gsap.to(svgElement, {
//         duration: 1, // Adjust the duration as needed
//         scale: 2,    // Adjust the scale factor as needed (2 means zoom in by a factor of 2)
//         ease: "expoScale(1, 2)" // Adjust the easing function as needed
//       });

//     }

//     setActiveIndex(landIndex);
//     setIsPointsActive(false);
//   };

//   // const handleZoomToLand = (landIndex) => {
//   //   const activeLandElement = document.querySelector('.activeLand');

//   //   console.log(activeLandElement, "activeLandElement")
//   //   if (activeLandElement) {
//   //     // const { x, y, width, height } = activeLandElement.getBoundingClientRect();

//   //     const scaleFactor = 1.45; // Adjust this value to control the zoom level

//   //     // TweenMax.to(containerRef.current, 0.5, {
//   //     //   scaleX: containerRef.current.clientWidth / (width * scaleFactor),
//   //     //   scaleY: containerRef.current.clientHeight / (height * scaleFactor),

//   //     //   // x: -(x + width / 2 - containerRef.current.clientWidth / 2),
//   //     //   // y: -(y + height / 2 - containerRef.current.clientHeight / 2),
//   //     //   ease: Power2.easeInOut,
//   //     // });


//   //     // gsap.to(".activeLand", { rotation: 27, x: 100, duration: 1 });


//   //   }

//   //   setActiveIndex(landIndex);
//   //   setIsPointsActive(false);
//   // };


//   // const handleZoomToLand = (landIndex) => {
//   //   const elementId = `land-${landIndex}`;
//   //   const { zoomToElement } = containerRef.current;

//   //   if (zoomToElement) {
//   //     // Instead of zooming using TweenMax, use the zoomToElement method
//   //     zoomToElement(elementId);
//   //   }

//   //   setActiveIndex(landIndex);
//   //   setIsPointsActive(false);
//   // };


//   // const handleZoomToLand = (index) => {
//   //   const elementId = `land-${index}`;
//   //   const element = document.getElementById(elementId);
//   //   console.log(elementId)

//   //   if (element) {
//   //     const { x, y, width, height } = element.getBoundingClientRect();
//   //     const scaleFactor = 1.01;
//   //     console.log(x)
//   //     TweenMax.to(containerRef.current, 0.5, {
//   //       scaleX: 1.02,
//   //       scaleY: 1.02,
//   //       x: -(x + width / 2 - containerRef.current.clientWidth / 2),
//   //       y: -(y + height / 2 - containerRef.current.clientHeight / 2),
//   //       ease: Power2.easeInOut,
//   //     });

//   //   }
//   //   setActiveIndex(index);
//   //   setIsPointsActive(false);
//   // };


//   return (
//     <>

//       <div id='map-boxes' >
//         <div className="tools">
//           {/* You can replace these buttons with your custom controls */}
//           <button onClick={() => TweenMax.to(containerRef.current, 0.5, { scale: '+=0.1' })}>Zoom In</button>
//           <button onClick={() => TweenMax.to(containerRef.current, 0.5, { scale: '-=0.1' })}>Zoom Out</button>
//           <button onClick={() => {
//             TweenMax.to(containerRef.current, 1, { scale: 1 })
//             setActiveIndex(null);
//             setActiveLand(null);
//             setIsPointsActive(false);
//             if (activeLand) {
//               activeLand.classList.remove('activeLand');
//               setIsPointsActive(false)
//             }

//           }
//           }

//           >Reset</button>

//           <div className={`box ${activeIndex === null ? 'active' : ''}`} onClick={() => {
//             TweenMax.to(containerRef.current, 0.5, { scale: 1 })
//             setActiveIndex(null);
//             setActiveLand(null);
//             setIsPointsActive(false);
//             if (activeLand) {
//               activeLand.classList.remove('activeLand');
//               setIsPointsActive(false)
//             }

//           }
//           }

//           >
//             <div className={"img_container"}>
//               <img src={smallMap.src} alt="الرياض" />
//             </div>
//             <div className={"name"}>
//               <Typography>المملكة</Typography>
//             </div>
//           </div>

//           {Array.from({ length: landElements.length }).map((_, index) => (

//             <div className={`box ${index === activeIndex ? 'active' : ''}`} key={index} onClick={() => handleZoomToLand(index)}>
//               <div className={"img_container"}>
//                 <img src={smallMap.src} alt="الرياض" />
//               </div>
//               <div className={"name"}>
//                 <Typography>الرياض Zoom to Land {index + 1}</Typography>
//               </div>
//             </div>

//           ))}
//         </div>

//         {/* Other SVG elements go here */}
//         <div className="map-box" id='map-box' dir='ltr' >
//           <Svg />
//         </div>
//       </div >
//     </>
//   );
// };

// export default SaudiMap;
