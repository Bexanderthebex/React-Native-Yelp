import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const search = async (searchTerm) => {
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          location: 'san jose',
          term: searchTerm
        }
      })
      setRestaurants(res.data.businesses)
    } catch (error) {
      console.log('nag-error')
      setErrorMessage('Something went wrong');
    }
  }

  useEffect(() => {
    search('pasta')
  }, [])

  return {search, restaurants, errorMessage}
}
