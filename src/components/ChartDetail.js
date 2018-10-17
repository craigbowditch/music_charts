import React from 'react';


const ChartDetail = (props) => {


  return (
    <div className="song">
      <h3>
        {props.chartPosition})  {props.artist}
      </h3>
      <p>
        {props.song}
      </p>
      <img src={props.image} alt="music"/>

      <audio src={props.audio} className="preview-song" controls></audio>
    </div>

  )
}

export default ChartDetail;
