import config from '../config';

const UsersApiService = {
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:  JSON.stringify(user),
    })
    .then(res => {
      if(!res.ok){
        return res.json().then(e=> Promise.reject(e));
      }
      return res.json();
    });
  },
}

export default UsersApiService;