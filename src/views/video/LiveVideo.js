import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import View from '../../components/layout/View';
import LiveVideoBox from './_LiveVideo/LiveVideoBox';
import ButtonGroup from '../../components/buttonGroup/ButtonGroup';
import { getLiveView } from '../../store/action/channels.action';

const LiveVideo = () => {
    //const [viewNum,setViewNum]=useState(0); // TODO : changePage
    const { videoChannels, playList, viewType } = useSelector(state => state.channels);
    const { loginInfo } = useSelector(state => state.user);
    const { userId } = loginInfo;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLiveView(userId, viewType));
    }, [dispatch, userId, viewType]);


    const channelBtnsChangeHandler = (btn, label) => {
        console.log(btn)
        console.log(label)
    }
    const setViewType = (type) => {
        dispatch(getLiveView(userId, type, 0))
    }
    return (
        <View title="監控管理 View - 即時監控 Real Time">
            <LiveVideoBox viewType={viewType} viewTypeChangeHandler={setViewType} playlist={playList} />
            <div className="view_tabs">
                <Tabs>
                    <TabList>
                        <Tab>頻道 Channel</Tab>
                        <Tab>群組 Group</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="channel-btns-div">
                            <ButtonGroup
                                rowNum={7}
                                btns={videoChannels}
                                label="channelName"
                                clickFun={channelBtnsChangeHandler} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        Group
                    </TabPanel>
                </Tabs>
            </div>
        </View>
    );
};

export default LiveVideo;