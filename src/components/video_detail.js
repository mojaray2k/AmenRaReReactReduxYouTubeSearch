import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return (
      <div>Loading...</div>
    )
  }
  const videoDetailTitle = video.snippet.title;
  const videoDetailDescription = video.snippet.description;
  const videoDetailId = video.id.videoId;
  const videoDetailUrl = `https://www.youtube.com/embed/${videoDetailId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={videoDetailUrl} className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <div>{videoDetailTitle}</div>
        <div>{videoDetailDescription}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
