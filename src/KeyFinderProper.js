import { useEffect, useState } from 'react';
import { octokit } from './octokit';

export default function KeyFinderProper(username) {

  const [requestedData, setRequestedData] = useState([]);
  const [error, setError] = useState(null);
  const [returned, setReturned] = useState(false);

  useEffect(() => {
    async function getKeys() {
      setReturned(false);
      setError(null);

      try {
        const reponse = await octokit.request(
          'GET /users/{username}/keys', { 
          username: `${username}`
        });
        setRequestedData(reponse.data)
      } catch(err) {
        setError(err)
      } finally {
        setReturned(true);
      }
    }

    getKeys();

  }, [username]);

  return { requestedData, error, returned }
};