import React, { useRef, useState } from 'react';
import './Keyfinder.css';
import KeyFinderProper from './KeyFinderProper';
import KeyList from './KeyList';


function KeyFinder() {
  const userRef = useRef(null);
  const [username, setUsername] = useState(null);
  const { requestedData, error, returned } = KeyFinderProper(username);

  const onRequest = (e) => {
    e.preventDefault();
    const requestedUsername = userRef.current.value;
    setUsername(requestedUsername);
  }

  return (
    <div className="keyFinder">
      <div className='keyFinder__body'>
        <form>
          <h1 className='keyFinder__descryption'>Enter Github Username</h1>
          <input type="text" placeholder='@exampleusername' ref={userRef} />
          <button onClick={onRequest}>Get keys</button>
        </form>
      </div>
      <div>
        {!returned &&
          <h2 className='keyFinder__loading'>Loading...</h2>
        }
        {returned && 
          <KeyList requestedData={requestedData} error={error} />
        }
      </div>

    </div>
  )
}

export default KeyFinder