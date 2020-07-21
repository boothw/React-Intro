import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Dm9zxWH4ZQGppOGSBfo7Eaq6P3JoRg7pEp1HcGoLMJg'
    }
})