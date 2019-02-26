/* global fetch */
require('isomorphic-fetch')

export default {
  users: () =>
    // fetch('https://jsonplaceholder.typicode.com/users').then(resp =>
    fetch('https://randomuser.me/api/1.0?results=50')
      .then(resp => resp.json())
      .then(users => {
        return users.results.map(res => ({
          ...res,
          text:
            'Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un'
        }))
      }),
  user: id =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(resp =>
      resp.json()
    )
}
