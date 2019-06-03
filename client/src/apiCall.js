const apiCall = (function () {
  const call = (uri) => {
    return fetch(uri)
      .then( (res) => {
         return res
      })
      .catch( (ex) => {
         return 0
      })
    }
    return { call: call };
})();

export default apiCall;
