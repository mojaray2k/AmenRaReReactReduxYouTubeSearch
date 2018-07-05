import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const videoImageUrl = video.snippet.thumbnails.default.url;
  const videoListTitle = video.snippet.title;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={videoImageUrl}  className="media-object"/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            {videoListTitle}
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
