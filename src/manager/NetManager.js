/**
 * fetch请求
 * @param {*} url 
 * @param {*} method 请求方法
 * @param {*} params 请求参数
 */
export const fetchRequest = (url, method, params) => {
  if (!url) throw new Error('url is error');
  if (!method) throw new Error('method is error');

  return new Promise((resolve, rejete) => {
    fetch(url, {
      method: method,
      data: JSON.stringify(params)
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('NetworkError');
    })
    .then((responseJson) => {
      resolve(responseJson);
    })
    .catch((error) => {
      rejete(error);
    });
  });
}