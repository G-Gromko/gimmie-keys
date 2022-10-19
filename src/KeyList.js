import React from 'react';
import './KeyList.css';

function KeyList(props) {

  const err = props.error;
  if (err) {
    return <div className='keyList__error'>
      <h2>Github user not found</h2>
    </div>
  }

  const exportKey = (key) => {
    const text = key.key;
    const file = new Blob([text], {type: 'text/plain'});
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = `key-${key.id}.txt`;
    document.body.appendChild(element);
    element.click();
  }
  

  const listOfKeys = props.requestedData.map((key) =>
  <div key={key.id} className='keyList__keyDetails'>
    <h3>id: {key.id}</h3>
    <h2>Key: <br />{key.key}</h2>
    <button className='keyList__buttonCopy'
      onClick={() => {
        navigator.clipboard.writeText(key.key);
      }}
      id='copyButton'>
      Copy
    </button>
    <button
      type='submit'
      className='keyList__buttonDownload'
      id='downloadButton'
      onClick={() => {exportKey(key)}}>
        Download
    </button>
  </div>
  );

  return (
    <div>
      {listOfKeys}
    </div>
  )
}

export default KeyList