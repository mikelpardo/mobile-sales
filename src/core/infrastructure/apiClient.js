import axios from 'axios'
import PropTypes from 'prop-types'

export class AxiosApiClient {
  constructor(baseURL, auth = undefined, withCredentials = false) {
    this.instance = axios.create({
      baseURL,
      auth,
      withCredentials
    })
  }

  get(path, params, options) {
    return new Promise((resolve, reject) => {
      this.instance
        .get(path, { ...options, params })
        .then(response => resolve(response.data))
        .catch(error => {
          reject(error)
        })
    })
  }

  post(path, data) {
    return new Promise((resolve, reject) => {
      this.instance
        .post(path, data)
        .then(response => resolve(response.data))
        .catch(error => {
          reject(error)
        })
    })
  }
}

AxiosApiClient.propTypes = {
  get: PropTypes.func,
  post: PropTypes.func
}
