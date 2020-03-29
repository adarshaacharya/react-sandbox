import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID aTPMmTBuez4xczMxdwNVZNEsDbnBs_1-3spnF4f4Chc'
    }
})