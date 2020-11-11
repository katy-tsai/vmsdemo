import React from 'react';
import VideoSimpleView from './VideoSimpleView';

const Videoboxs = ({playlist,viewType,className}) => {
    return (
        <div className={[`video_boxs_${viewType}`,className].join(" ")}>
            {
                playlist.map((video,index)=><VideoSimpleView video={video} key={`video_${video.deviceUID}${index}`}/>)
            }
        </div>
    );
};

export default Videoboxs;