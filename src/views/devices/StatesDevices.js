import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import View from '../../components/layout/View';
import { getUserDevices } from '../../store/action/devices.action';
import { Table, Thead, Column, Trow, Tbody } from '../../components/table/Table';
const columns = [
    { Header: '裝置名稱', width: '20%' },
    { Header: 'UID',  width: '20%' }, 
    { Header: '資訊',  width: '20%' },
    { Header: '頻道', width: '20%' },
    { Header: '成員',  width: '10%' },
    { Header: '狀態',  width: '10%' },
];

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
                        {
                            columns.map((col,index)=>{
                                return <Column key={`th_${index}`} width={col.width}>{col.Header}</Column>
                            })
                        }
                    </Thead>
                    <Tbody>
                        {
                            deviceList.map((device) => {
                                return (
                                    <Trow key={`tr_${device.udid}`}>
                                        <Column width={columns[0].width}>{device.displayName}</Column>
                                        <Column width={columns[1].width}>{device.udid}</Column>
                                        <Column width={columns[2].width}>
                                            <p>總容量 : {device.totalSpace}<br />
                                            剩餘 : {device.freeSpace}<br />
                                            MAC位址 : {device.mac}</p>
                                        </Column>
                                        <Column width={columns[3].width}>
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
                                        <Column width={columns[4].width}>
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
                                        <Column width={columns[5].width}>
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
                <div className="col-12 row row-right pr-0">
                    <button className="main_btn col-3 my-5 " type="button" >新增裝置</button>
                </div>
            </div>

        </View>
    );
};

export default StatesDevices;