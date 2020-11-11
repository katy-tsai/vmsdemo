import React from 'react';

const VideoSimpleView = ({video}) => {
    return (
        <div className="vedio_item">
            {video.channelName}
        </div>
    );
};

export default VideoSimpleView;