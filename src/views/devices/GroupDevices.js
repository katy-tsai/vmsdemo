import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import View from '../../components/layout/View';
import DndGroupTable from '../../components/dndTable/DndGroupTable';
import DndContainer from '../../components/dndTable/DndContainer';
import DragItemList from '../../components/dndTable/DragItemList';
import AddInputbar from '../../components/addInputbar/AddInputbar';
import { getGroups, addGroup, dropGroupData } from '../../store/action/groups.action';
import { getChannelList } from '../../store/action/channels.action';
import { getUsers } from '../../store//action/users.action';
import { isExist } from '../../utils/dataUtils';
const columns = [{ Header: '群組名稱', accessor: 'groupName', width: '20%' },
{ Header: '可讀取帳號', accessor: 'accounts', width: '40%' }, { Header: '頻道名稱', accessor: 'channels', width: '40%' }];

const GroupDevices = () => {
    const { groupData } = useSelector(state => state.groups);
    const { channelList } = useSelector(state => state.channels);
    const { loginInfo, userList } = useSelector(state => state.user);
    const { userId } = loginInfo;
    const dispatch = useDispatch();
    useEffect(() => {
        function fetchData() {
            dispatch(getGroups(userId, 'custom'));
            dispatch(getChannelList(userId));
            dispatch(getUsers(userId));
        }
        fetchData();

    }, [dispatch, userId]);
    useEffect(() => {

    }, [groupData]);
    const addNewGroup = (name) => {
        if (name) {
            dispatch(addGroup(name, userId));
        } else {
            alert('Please Enter Group Name')
        }

    }

    const handleDrop = useCallback((groupIndex, item, type) => {
        if (!isExist(groupData[groupIndex][type], 'id', item.id)) {
            let editGroupData = { ...groupData[groupIndex], [type]: [...groupData[groupIndex][type], item] }
            groupData[groupIndex] = editGroupData;
            dispatch(dropGroupData(groupData));
        } else {
            alert('已設定')
        }

        // setGroupData(groupData);
    }, [dispatch, groupData]);

    return (
        <View title="裝置管理 Devices - 群組設定 Group">
            <div className="col-6 row row-right">
                <div className="col-6">
                    <AddInputbar placeholder="Add New Group Name" btnClick={addNewGroup} />
                </div>
            </div>
            <DndContainer>
                <DndGroupTable
                    className="col-6"
                    columns={columns}
                    data={groupData}
                    handleDrop={handleDrop}
                />
                <DragItemList title="頻道列表" data={channelList} className="col-3" nameLabel="channelName" type="channels" />
                <DragItemList title="帳號列表" data={userList} className="col-3" nameLabel={["userName", "displayName"]} type="accounts" />
            </DndContainer>
            <div className="col-6 row row-right">
                <button className="main_btn col-3 my-5" type="button" >保存</button>
            </div>
        </View>
    );
};

export default GroupDevices;