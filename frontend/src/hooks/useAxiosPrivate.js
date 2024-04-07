import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Return a cleanup function to remove the interceptor when the component unmounts
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [auth]); // Re-run this effect if the `auth` object changes

  return axiosPrivate;
};

export default useAxiosPrivate;
