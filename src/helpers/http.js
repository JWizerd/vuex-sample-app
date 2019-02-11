// EXAMPLE: this.$store.state = await get('http://google.com')
import axios from 'axios'

export function get(endpoint) {
    return axios.get(endpoint)
}