import axios from 'axios';
import React from 'react';

const KEY = "AIzaSyB86cnCsQMrV3L2AE3LWecTiVXp5_0aU04";


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});
