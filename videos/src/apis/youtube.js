import axios from 'axios';

const KEY = 'AIzaSyA-JF6HXRq5SD_nffVwa5r-dgiM9o3p_00';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});
