import React from "react";
import DomeGallery from "../components/DomeGallery";

import sj from "../assets/logo/sj2.jpeg";
import t1 from '../assets/training/t1.png'
import t2 from '../assets/training/t2.png'
import t3 from '../assets/training/t3.png'
const DEFAULT_IMAGES = [
  {
    src: sj,
    alt: "Abstract art",
  },
  {
    src: t1,
    alt: "Abstract art",
  },
  {
    src: t2,
    alt: "Abstract art",
  },
  {
    src: t3,
    alt: "Abstract art",
  },
  {
    src: sj,
    alt: "Abstract art",
  },
  {
    src: t1,
    alt: "Abstract art",
  },
  {
    src: t2,
    alt: "Abstract art",
  },
  {
    src: t3,
    alt: "Abstract art",
  },
 {
    src: sj,
    alt: "Abstract art",
  },
  {
    src: t1,
    alt: "Abstract art",
  },
  {
    src: t2,
    alt: "Abstract art",
  },
  {
    src: t3,
    alt: "Abstract art",
  },
 {
    src: sj,
    alt: "Abstract art",
  },
  {
    src: t1,
    alt: "Abstract art",
  },
  {
    src: t2,
    alt: "Abstract art",
  },
  {
    src: t3,
    alt: "Abstract art",
  },
];
const Gallery = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <DomeGallery
        images={DEFAULT_IMAGES}
        fit={0.85}
        minRadius={750}
        maxVerticalRotationDeg={0}
        segments={30}
        dragDampening={2}
        grayscale={false}
      />
    </div>
  );
};

export default Gallery;
