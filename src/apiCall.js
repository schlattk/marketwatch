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

// const apiCall = function (uri) {
//     return fetch(uri)
//       .then( (res) => {
//          return res
//       })
//       .catch( (ex) => {
//          return 0
//       })
// };

export default apiCall;
