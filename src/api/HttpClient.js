import Axios from 'axios-observable'

export default Axios.create({
    baseURL: 'https://covid19.mathdro.id/api',
    header: {
        'Content-Type': 'application/json'
    }
})
