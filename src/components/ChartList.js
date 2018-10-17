import React from 'react';
import ChartDetail from './ChartDetail.js';

const ChartList = (props) => {
  const songs = props.songs.map((song, index) => {
    return(
      <ChartDetail artist={song['im:artist'].label} song={song["im:name"].label} audio={song.link[1].attributes.href} key={index} chartPosition={index + 1} image={song["im:image"][2].label}>
      </ChartDetail>
    )
  })


  return (
    <div className ="chart-list">
      {songs}
    </div>
  )
}



export default ChartList;
