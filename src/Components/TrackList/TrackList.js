import React from "react";
import "./TrackList.css";

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        <ul>
          <li>SongA</li>
          <li>SongB</li>
          <li>SongC</li>
        </ul>
      </div>
    );
  }
}

export default TrackList;
