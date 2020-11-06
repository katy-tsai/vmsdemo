import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import View from '../../components/layout/View';
const MapDevices = () => {
    return (
        <View title="裝置管理 Devices - MAP">
            <Tabs>
                <TabList>
                    <Tab>平面圖 Floor plan</Tab>
                    <Tab>地圖 Map</Tab>
                </TabList>

                <TabPanel>
                    平面圖
                </TabPanel>
                <TabPanel>
                    地圖
                </TabPanel>
            </Tabs>
        </View>
    );
};

export default MapDevices;