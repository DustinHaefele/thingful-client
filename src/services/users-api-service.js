import config from '../config';

const UsersApiService = {
  postUser(user) {
    fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      body: user,
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    );
  },
}

export default UsersApiService;