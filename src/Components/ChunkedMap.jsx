import React, { useState } from 'react';
import Modal from "../Components/Modal.jsx";
import "../Styling/ChunkedMap.css"
export default function ChunkedMap(sex) {
  const [clickedImgMale, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };
  const handelRotationRight = () => {
    const totalLength = sex.sex.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = sex.sex[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = sex.sex.filter((item) => {
      return sex.sex.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = sex.sex.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = sex.sex[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = sex.sex.filter((item) => {
      return sex.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className='big-wrapper-container'>
      <h1 className='inter centered-head'>CHECK OUR ART</h1>
      <h1 className='head-wrap inter'>{sex.title}</h1>
      <div className="wrapper">
        {sex.sex.map((item, index) => (
          <div key={index} className="wrapper-images">
            <img
              className='wraped-img'
              src={item.link}
              alt={item.text}
              onClick={() => handleClick(item, index)}
            />
          </div>
        ))}
        <div>
          {clickedImgMale && (
            <Modal
              clickedImg={clickedImgMale}
              handelRotationRight={handelRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handelRotationLeft}
            />
          )}
        </div>
      </div>
    </div>
  );
}
