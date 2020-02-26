export function getUsers() {
  return fetchUsers()
}

export function getUser(id) {
  return fetchUsers(id)
}

export function postUser(data) {
  return fetchUsers({ method: 'POST', data })
}

export function patchUser(id, data) {
  return fetchUsers({ method: 'PATCH', id, data })
}

function fetchUsers({ method = 'GET', id = '', data } = {}) {
  // const dataTest = fetch('http://localhost:2234/users/' + id, {
  //   method,
  //   body: JSON.stringify(data),
  //   headers: {
  //     'content-type': 'application/json',
  //   },
  // })
  // console.log(dataTest)
  // const jsonData = JSON.stringify(data)
  // console.info(jsonData)

  return fetch('http://localhost:2234/users/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}

// useEffect(() => {
//   fetch('http://localhost:3334/cards')
//     .then(res => res.json())
//     .then(cardData => setCards(cardData))
// }, [])
