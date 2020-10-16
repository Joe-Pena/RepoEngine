import React, { useEffect } from 'react';
import { useQuery } from '../../hooks';

const SearchResults = () => {
  const queryParams = useQuery();
  useEffect(() => {
    if (!queryParams.get('query')) {
      console.log('redirect');
    }
  }, []);
  return (
    <p>
      <strong>Location Props: </strong>
    </p>
  );
};

export default SearchResults;
