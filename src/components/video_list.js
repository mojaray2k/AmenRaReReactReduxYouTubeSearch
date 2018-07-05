import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const { onVideoSelect } = props;
  const vidoeItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={onVideoSelect} 
        video={video} 
        key={video.etag} 
      />
    );      
  })

  return (
    <ul className="col-md-4 list-group">
      {vidoeItems}
    </ul>
  )
}

export default VideoList;
