import React from 'react';

export function handleDesc(description) {
  return description.map((desc, index) => {
    return (
      <span key={index}>
        {desc}
        {index === description.length - 1 ? '..' : ''}
        <br />
        <br />
      </span>
    );
  });
}

export function cacheImage(srcArray, setIsLoading) {
  srcArray.forEach((src) => {
    new Promise(function (resolve, reject) {
      const img = new Image();

      img.src = src;
      img.onload = resolve();
      img.onerror = reject();
    });
  });

  setIsLoading(false);
}
