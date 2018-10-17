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

      <audio>
        <source src={props.audio} preload='auto'/>
      </audio>
      <button>Play audio</button>
    </div>

  )
}

export default ChartDetail;
