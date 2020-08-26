import Axios from 'axios';
import { useEffect } from 'react';
import React from 'react';

const useAxios = (opts, axiosInstance = Axios) => {
  const [state, setState] = React.useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = React.useState(0);

  if (!opts.url) return;

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });

    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, [trigger]);

  return { ...state, refetch };
};

export default useAxios;
