// Tag.js

import React from 'react';

function Tag({ tags }) {
  // console.log(tags);
  return (
    <>
      {tags.map((tag, index) => (
        <span className='tag'>{tag}</span>
      ))}
    </>
  );
}

export default Tag;
