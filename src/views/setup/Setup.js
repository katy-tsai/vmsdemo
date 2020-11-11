import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import View from '../../components/layout/View';
import UserSetup from './_Setup/UserSetup';

const Setup = () => {

    return (
        <View title="基本設定 User’s Information Setup">
            <Tabs>
                <TabList>
                    <Tab>基本資料 Information</Tab>
                    <Tab>帳號權限管理 Account authority</Tab>
                </TabList>
                <TabPanel>
                    <UserSetup />
                </TabPanel>
                <TabPanel>
                    帳號權限管理
                </TabPanel>
            </Tabs>
        </View>
    );
};

export default Setup;