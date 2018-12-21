import {config} from '../config';
import {createUrl} from "./requestTools";

const httpMethods = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE'
};
const apiUrlRequest = config.apiUrl;

const fetchTemplate = (urlDomain, method, paramsData) => {
  let url = urlDomain;
  let requestSettings = {
    'method': method,
    // 'credentials': 'include', //TODO: need CORS handling on backend
    'headers': {
      'Content-type': 'application/json'
    }
  };
  if(paramsData !== undefined){
    if(method === httpMethods.GET)
      url = createUrl(urlDomain, paramsData);
    else if (method === httpMethods.POST)
      requestSettings.body = JSON.stringify(paramsData);
  }
  return fetch(url, requestSettings).then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      var error = new Error(response.statusText || response.status);
      error.response = response;
      return Promise.reject(error);
    }
  });
}

export const fetchGreeting = () => {
  const params = {
    name: 'Dawid'
  };
  const url = `${apiUrlRequest}/greeting`;
  return fetchTemplate(url, httpMethods.GET, params);
}
