import React, {useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import {axiosInstance} from "../../service/apiService";
import useRefreshToken from '../../hooks/useRefreshToken'

const AuthenticationProvider = ()=>{
    const refreshToken = useRefreshToken();

    useEffect( () => {
        refreshToken();

        const responseInterceptor = axiosInstance.interceptors.response.use(
            response=>response,
            async(error)=>{
                const prevRequest = error?.config;
                if (error?.response?.status === 401 && !prevRequest?.sent) {
                    console.log("sent");
                    prevRequest.sent = true;
                    return axiosInstance(prevRequest);
                }
                return Promise.reject(error);
            }
        )

        return () => {
            axiosInstance.interceptors.response.eject(responseInterceptor);
        }

    }, []);


    return(
        <>
            <Outlet/>
        </>
    )
}

export default AuthenticationProvider
