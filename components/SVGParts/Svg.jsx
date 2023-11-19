// import React, { use, useEffect, useState } from 'react'
// import Defs from './Defs';
// import GElements from './GElements';


// const Svg = () => {
//   const [viewBox, setViewBox] = useState()
//   const [smallScreen, setSmallScreen] = useState(false)
//   const [width, setWidth] = useState();
//   const [height, setHeight] = useState()
//   useEffect(() => {
//     const handleResize = () => {
//       const viewportWidth = window.innerWidth;
//       if (viewportWidth >= 450) {
//         setSmallScreen(true)
//       } else {
//         setSmallScreen(false)
//       }

//       if (viewportWidth <= 600) {
//         setViewBox("0 0 414 407"); // for small screens
//         setWidth("414")
//         setHeight("407")
//       } else if (viewportWidth <= 1200) {
//         setViewBox("0 0 858 724"); // for medium screens
//         setWidth("858")
//         setHeight("724")

//       } else {
//         setViewBox("0 0 858 724"); // for large screens
//         setWidth("858")
//         setHeight("724")

//       }
//     };

//     // Initial call
//     handleResize();

//     // Event listener for window resize
//     window.addEventListener('resize', handleResize);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
//   return (
//     <>
//       <xml version="1.0" encoding="UTF-8" standalone="no" />
//       <svg id="svg1" width="858" height="724" fill="none" xmlns="http://www.w3.org/2000/svg" class="saudi-map" viewBox="0 0 858 724">
//         <GElements />
//       </svg>
//     </>
//   )
// }

// export default Svg

import React, { useEffect, useState, useRef } from 'react';
import GElements from './GElements';
import { TransformComponent } from 'react-zoom-pan-pinch';

const Svg = () => {
  const [viewBox, setViewBox] = useState("0 0 858 724");
  const transformComponentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth <= 600) {
        setViewBox("0 0 414 407"); // for small screens
        if (transformComponentRef.current) {
          transformComponentRef.current.setTransformMatrix([0.6, 0, 0, 0.6, 379, 15]);
        }
      } else {
        setViewBox("0 0 858 724"); // for medium and large screens
      }
    };

    // Initial call
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <TransformComponent ref={transformComponentRef}>
      <svg id="svg1" width="858" height="724" fill="none" xmlns="http://www.w3.org/2000/svg" class="saudi-map" viewBox="0 0 858 724">
        <GElements />
      </svg>
    </TransformComponent>
  );
};

export default Svg;
