import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import View from '../../components/layout/View';
const EventSetting = () => {
    return (
        <View title="事件管理 Event - 事件設定 Setup">
            <Tabs>
                <TabList>
                    <Tab>視訊遺失/恢復 Video loss/recovery</Tab>
                    <Tab>位移 Displacement</Tab>
                    <Tab>其他 Others</Tab>
                </TabList>

                <TabPanel>
                    視訊遺失
                </TabPanel>
                <TabPanel>
                    位移
                </TabPanel>
                <TabPanel>

                </TabPanel>
            </Tabs>
        </View>
    );
};

export default EventSetting;