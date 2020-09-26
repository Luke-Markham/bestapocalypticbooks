import React from 'react';

export function handleDesc(description, length) {
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

  if (setIsLoading !== undefined) {
    setIsLoading(false);
  }
}

export function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

export function dashlize(str) {
  return str.replace(/\s/g, '-');
}

export function dedashlize(str) {
  return str.split('-').join(' ');
}
