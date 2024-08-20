import React from 'react';
import group from '../images/group.jpg';
import group2 from '../images/group2.jpg';
import group3 from '../images/group3.jpg';
import lobbyday_1 from '../images/lobbyday-1.jpg';
import speaking from '../images/speaking.jpg';
import summit from '../images/summit.jpg';
import summit2 from '../images/summit2.jpg';
import summit3 from '../images/summit3.jpg';
import summit4 from '../images/summit4.jpg';
import { useState, useEffect } from 'react';

const images = [group, group2, lobbyday_1, speaking, group3, summit, summit2, summit3, summit4];

function ImageSlideshow () {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className = "w-full">
        <div className=''>
            <img src={images[index]} alt="slideshow" className="w-full h-[48rem] object-cover"/>
        </div>
      </div>
    );
}

export default ImageSlideshow;