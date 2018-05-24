import 'whatwg-fetch'

import getBaseUrl from './baseUrl'

const baseUrl = getBaseUrl()

export function getUsers() {
  return get('users')
}

export function deleteUser() {
  return del('users/32633770')
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError)
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  })
  return fetch(request).then(onSuccess, onError)
}

function onSuccess(response) {
  return response.json()
}

function onError(err) {
  console.log(err) //eslint-disable-line no-console

}
