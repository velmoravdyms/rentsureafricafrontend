// import axios from 'axios';
// import { getAccessToken, getRefreshToken, setTokens, clearTokens } from './tokenutils';

// const api = axios.create({
//     baseURL: 'http://localhost:8000',
//     headers: {
//         'Content-Type': 'application/json',
//       },
// });

// api.interceptors.request.use(

//     // console.log("request going out")

//     config => {
//         const token = getAccessToken();
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     // console.log("About to make Request ", error),
//     error => Promise.reject(error)
// );

// api.interceptors.response.use(
//     response => response,
//     async error => {
//         console.log("Error Response from Server " , error)
//         const originalRequest = error.config;
//         if (error.response.status === 401 && !originalRequest._retry) {
//             console.log("Retrying Request")
//             originalRequest._retry = true;
//             const refreshToken = getRefreshToken();
//             if (refreshToken) {
//                 try {
//                     console.log("Now trying to get Access toeken using Refresh token");
                    
//                     const response = await axios.post('http://localhost:8000/o/auth/refreshtokens', { refreshToken });
//                     setTokens(response.data.accessToken, response.data.refreshToken);
//                     axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
//                     return api(originalRequest);
//                 } catch (e) {
//                     clearTokens();
//                     window.location.href = '/signin';
//                 }
//             }
//         }
//         return Promise.reject(error);
//     }
// );

// export default api;





import axios from 'axios';
import { getAccessToken, getRefreshToken, setTokens, clearTokens } from './tokenutils';

// Dynamically target process.env or fallback to localhost
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    config => {
        const token = getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

api.interceptors.response.use(
    response => response,
    async error => {
        console.log("Error Response from Server ", error);
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            console.log("Retrying Request");
            originalRequest._retry = true;
            const refreshToken = getRefreshToken();

            if (refreshToken) {
                try {
                    console.log("Now trying to get Access token using Refresh token");
                    
                    // Uses dynamic BASE_URL instead of hardcoded localhost
                    const response = await axios.post(`${BASE_URL}/o/auth/refreshtokens`, { refreshToken });
                    setTokens(response.data.accessToken, response.data.refreshToken);
                    
                    api.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
                    originalRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
                    
                    return api(originalRequest);
                } catch (e) {
                    clearTokens();
                    window.location.href = '/signin';
                }
            }
        }
        return Promise.reject(error);
    }
);

export default api;