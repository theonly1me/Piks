import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 7H8U0UA2462o80CaGfII6R0yfz5bLWdD2ckGH0NjTMI',
  },
});
