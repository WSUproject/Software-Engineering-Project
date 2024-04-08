// import { axios } from "../components/api/axios";
import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = axios.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Return a cleanup function to remove the interceptor when the component unmounts
    return () => {
      axios.interceptors.request.eject(requestIntercept);
    };
  }, [auth]); // Re-run this effect if the `auth` object changes

  return axios;
};

export default useAxiosPrivate;
