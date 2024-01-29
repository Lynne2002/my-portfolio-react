import React, {useEffect, useState} from 'react'
import axios from 'axios';


function Ext_jokes_API() {

const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://icanhazdadjoke.com/', {
          headers: { Accept: 'application/json' },
        });
        setJoke(response.data.joke);
      } catch (error) {
        console.error('Error fetching joke:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='dadjoke'>
      <h2>Dad Joke:</h2>
      <p>{joke}</p>
    </div>
  );
};

export default Ext_jokes_API
