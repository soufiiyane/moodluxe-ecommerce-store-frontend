export const AxiosHeadersWithoutAuthorization = (axios)=>{
    const headers = {...axios.defaults.headers.common};
    delete headers["Authorization"];
    return headers;
}