import {baseUrl} from "../shared/baseUrl";

export const getData = (uri) => {
    return fetch(baseUrl + uri)
    .then(response => {
            if (response.ok) {
                return response
            } else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        },
        error => {
            let errmess = new Error(error.message)
            throw errmess
        })
}