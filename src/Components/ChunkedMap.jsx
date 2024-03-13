import React, { useState } from 'react';
import data from "../Data/images.json"
import Modal from "../Components/Modal.jsx";
import "../Styling/ChunkedMap.css"
export default function ChunkedMap() {
  const [clickedImgMale, setClickedImgMale] = useState(null);
  const [clickedImgFemale, setClickedImgFemale] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClickMale = (item, index) => {
    setCurrentIndex(index);
    setClickedImgMale(item.link);
  };

  const handleClickFemale = (item, index) => {
    setCurrentIndex(index);
    setClickedImgFemale(item.link);
  };

  const handelRotationRightMale = () => {
    const totalLength = data.male.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.male[0].link;
      setClickedImgMale(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.male.filter((item) => {
      return data.male.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImgMale(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeftMale = () => {
    const totalLength = data.male.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.male[totalLength - 1].link;
      setClickedImgMale(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.male.filter((item) => {
      return data.male.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImgMale(newItem);
    setCurrentIndex(newIndex);
  };





  const handelRotationRightFemale = () => {
    const totalLength = data.female.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.female[0].link;
      setClickedImgFemale(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.female.filter((item) => {
      return data.female.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImgFemale(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeftFemale = () => {
    const totalLength = data.female.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.female[totalLength - 1].link;
      setClickedImgFemale(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.female.filter((item) => {
      return data.female.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImgFemale(newItem);
    setCurrentIndex(newIndex);
  };




  return (
    <div className='big-wrapper-container'>
      <h1 className='head-wrap'>Male</h1>
    <div className="wrapper">
      {data.male.map((item, index) => (
        <div key={index} className="wrapper-images">
          <img
            className='wraped-img'
            src={item.link}
            alt={item.text}
            onClick={() => handleClickMale(item, index)}
          />
        </div>
      ))}
      <div>
        {clickedImgMale && (
          <Modal
            clickedImg={clickedImgMale}
            handelRotationRight={handelRotationRightMale}
            setClickedImg={setClickedImgMale}
            handelRotationLeft={handelRotationLeftMale}
          />
        )}
      </div>
    </div>

    <h1 className='head-wrap'>Female</h1>
    <div className="wrapper">
      {data.female.map((item, index) => (
        <div key={index} className="wrapper-images">
          <img
            className='wraped-img'
            src={item.link}
            alt={item.text}
            onClick={() => handleClickFemale(item, index)}
          />
        </div>
      ))}
      <div>
        {clickedImgFemale && (
          <Modal
            clickedImg={clickedImgFemale}
            handelRotationRight={handelRotationRightFemale}
            setClickedImg={setClickedImgFemale}
            handelRotationLeft={handelRotationLeftFemale}
          />
        )}
      </div>
    </div>


    </div>
  );
}
