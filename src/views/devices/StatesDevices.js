import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import View from '../../components/layout/View';
import { getUserDevices } from '../../store/action/devices.action';
import { Table, Thead, Column, Trow, Tbody } from '../../components/table/Table';

const StatesDevices = () => {
    const { deviceList } = useSelector(state => state.devices);
    const { loginInfo } = useSelector(state => state.user);
    const { userId } = loginInfo;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserDevices(userId));
    }, [dispatch, userId]);
    return (
        <View title="裝置管理 Devices - 裝置狀態 States">
            <div className="table-container">
                <Table>
                    <Thead>
                        <Column>裝置名稱</Column>
                        <Column>UID</Column>
                        <Column>資訊 </Column>
                        <Column>頻道 </Column>
                        <Column>成員 </Column>
                        <Column>狀態 </Column>
                    </Thead>
                    <Tbody>
                        {
                            deviceList.map((device) => {
                                return (
                                    <Trow key={`tr_${device.udid}`}>
                                        <Column>{device.displayName}</Column>
                                        <Column>{device.udid}</Column>
                                        <Column>
                                            <p>總容量 : {device.totalSpace}<br />
                                            剩餘 : {device.freeSpace}<br />
                                            MAC位址 : {device.mac}</p>
                                        </Column>
                                        <Column>
                                            {
                                                device.channels.map((channel) => {
                                                    const height = 100 / channel.length;
                                                    return (
                                                        <div key={`col_name_${channel.channelId}`} className="col_li" style={{ flex: `0 0 ${height}%` }}>
                                                            {channel.channelName}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Column>
                                        <Column>
                                            {
                                                device.channels.map((channel) => {
                                                    const height = 100 / channel.length;
                                                    return (
                                                        <div key={`col_name_${channel.channelId}`} className="col_li" style={{ flex: `0 0 ${height}%` }}>
                                                            {channel.member.length}
                                                        </div>
                                                    )
                                                })
                                            }

                                        </Column>
                                        <Column>
                                            {
                                                device.channels.map((channel, index) => {
                                                    const height = { height: `'${100 / channel.length}%'` };
                                                    return (
                                                        <div key={`col_name_${channel.channelId}`} className="col_li" >
                                                            <div style={height}>{channel.states}</div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Column>
                                    </Trow>
                                )
                            })
                        }

                    </Tbody>

                </Table>
            </div>

        </View>
    );
};

export default StatesDevices;