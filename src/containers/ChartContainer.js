import React, {Component} from 'react';
import ChartList from '../components/ChartList.js';

class ChartContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url)
    .then((res) => res.json())
    .then((songs) => {
      this.setState({songs: songs.feed.entry});
    })
  }

  render(){
    return (
      <div>
        <h2>Top 20</h2>
        <ChartList songs={this.state.songs} />
      </div>
    );
  }
}

export default ChartContainer;
