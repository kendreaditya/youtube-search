import React, { useEffect, useState, axios } from 'react'
import VideoList from './components/VideoList'
import api from './api/youtube'

function App() {
  const [query, setQuery] = useState("cat");
  const [videoList, setVideoList] = useState(null);

  useEffect(async () => {
    await api.get('/search', {
      params: {
        q: query
      }
    }).then((response) => {
      setVideoList(response);
    });
  }, [query])

  return (
    <VideoList videos={videoList} />
  );
}

export default App;
