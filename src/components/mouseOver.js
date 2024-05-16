import React, { useState, useRef } from "react";

export default function MouseOver() {
  const [refs, setRefs] = useState([]);
  let steps = 0;
  let currentIndex = 0;
  let nbOfImages = 0;
  let maxNumberOfImages = 8;

  const manageMouseMove = (e) => {
    const { clientX, clientY, movementX, movementY } = e;

    steps += Math.abs(movementX) + Math.abs(movementY);

    if (steps >= currentIndex * 50) {
      moveImage(clientX, clientY);

      if (nbOfImages == maxNumberOfImages) {
        removeImage();
      }
    }

    if (currentIndex == refs.length) {
      currentIndex = 0;
      steps = -50;
    }
  };

  const moveImage = (x, y) => {
    const currentImage = refs[currentIndex].current;
    if (window.innerWidth > 1024) {
      if (currentImage) {
        currentImage.style.left = x + "px";
        currentImage.style.top = y + "px";
        currentImage.style.display = "block";
        currentIndex++;
        nbOfImages++;
        setZIndex();
      }
    }
  };

  const setZIndex = () => {
    const images = getCurrentImages();
    for (let i = 0; i < images.length; i++) {
      images[i].style.zIndex = i;
    }
  };

  const removeImage = () => {
    const images = getCurrentImages();
    if (images[0]) {
      images[0].style.display = "none";
      nbOfImages--;
    }
  };

  const getCurrentImages = () => {
    let images = [];
    let indexOfFirst = currentIndex - nbOfImages;
    for (let i = indexOfFirst; i < currentIndex; i++) {
      let targetIndex = i;
      if (targetIndex < 0) targetIndex += refs.length;
      images.push(refs[targetIndex].current);
    }
    return images;
  };

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className="mouse-over"
    >
      {[...Array(16).keys()].map((_, index) => (
        <MouseItem setRefs={setRefs} refs={refs} index={index} key={index} />
      ))}
    </div>
  );
}

function MouseItem({ setRefs, refs, index }) {
  const ref = useRef(null);

  // Update the refs array in the parent component
  // whenever a new ref is created in this component
  useState(() => {
    setRefs((prevRefs) => {
      const newRefs = [...prevRefs];
      newRefs[index] = ref;
      return newRefs;
    });
  }, [ref]);

  return (
    <img
      onClick={() => {
        console.log(refs);
      }}
      ref={ref}
      key={index}
      src={`/images/mouse-images/${index}.png`}
    />
  );
}
