const apiCall = (uri) => {
    return fetch(uri);
    .then( (res) => {
       return res
    })
 };

 export default apiCall;
