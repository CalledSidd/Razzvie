import { createContext, useState, useEffect } from "react";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import axios from "axios";
const baseURL = 'http://127.0.0.1:8000'

let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null

const axiosInstance = axios.create({
    baseURL,
    headers:{Authorization: `Bearer ${authTokens?.access}`}
});



axiosInstance.interceptors.request.use(async req => {
    if(!authTokens){
        authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
        req.headers.Authorization=`Bearer ${authTokens?.access}`
    }
    const user = jwt_decode(authTokens.access)
    const is_expired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if(!is_expired) return req
    const response = await axios.post(`${baseURL}/account/token/refresh`, {
        refresh : authTokens.refresh 
    })

    localStorage.setItem('authTokens' , JSON.stringify(response.data))
    req.headers.Authorization=`Bearer ${response.data .access}`
    return req
})

export default axiosInstance;