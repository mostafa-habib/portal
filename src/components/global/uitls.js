import axios from 'axios';


const http = axios.create();

function handleAPI(
    path, params, method, data = null
  ) {
    const token = localStorage.getItem('Access-Token');
    let headers = {
      // 'Content-Type': 'application/json',
      // Accept: 'application/json',
      // 'Access-Token': 'token1111111222222222435432',
      // 'Authorization': 'Bearer ' + 'token1111111222222222435432',        
    };
    
    let url = path;

    return http({
      method,
      url,
      params,
      data,
      headers,
    });
  }

  export {handleAPI}