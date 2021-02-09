import React, {useEffect, useState} from 'react'
import VideoList from './components/VideoList'

function App() {

  return (
    <VideoList/>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);