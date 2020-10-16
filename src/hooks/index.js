import { useLocation } from 'react-router-dom';

// Hook for getting query params from URL
export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
