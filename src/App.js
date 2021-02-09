import React, {useEffect, useState, axios} from 'react'
import VideoList from './components/VideoList'
import apiCall from './api/youtube'

function App() {
  const [query, setQuery] = useState("");
  const [videoList, setVideoList] = useState(null);

  useEffect(() => {
    setVideoList(apiCall);
  }, [query])

  return (
    <VideoList/>
  );
}

export default App;
