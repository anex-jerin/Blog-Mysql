import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  return (
    <div className='w-container'>
      <div className='content'>
        <input type='text' placeholder='Title' />
        <div className='editor-container'>
          <ReactQuill className='editor' theme='snow' value={value} onChange={setValue} />
        </div>
      </div>
      <div className='menu'>
        <div className='item1'>
          <input type='file' style={{ display: 'none' }} id='image' />
          <label htmlFor='image' className='image'>
            Upload image
          </label>
          <div className='buttons'>
            <button>Save as Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className='item2'>
          <input type="radio" name='cat' value='art' id='art' />
          <label htmlFor="art">Art</label>
          <input type="radio" name='cat' value='science' id='science' />
          <label htmlFor="science">Science</label>
          <input type="radio" name='cat' value='sports' id='sports' />
          <label htmlFor="sports">Sports</label>
          <input type="radio" name='cat' value='cinema' id='cinema' />
          <label htmlFor="cinema">Cinema</label>
          <input type="radio" name='cat' value='technology' id='technology' />
          <label htmlFor="technology">Technology</label>
          <input type="radio" name='cat' value='food' id='food' />
          <label htmlFor="food">Food</label>
        </div>
      </div>
    </div>
  );
};

export default Write;
