import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import View from '../../components/layout/View';
import DndGroupTable from '../../components/dndTable/DndGroupTable';
import DndContainer from '../../components/dndTable/DndContainer';
import DragItemList from '../../components/dndTable/DragItemList';
import { getGroups } from '../../store/action/groups.action';
const columns = [{ Header: '群組名稱', accessor: 'groupName' },
{ Header: '可讀取帳號', accessor: 'accounts' }, { Header: '頻道名稱', accessor: 'channels' }];

const GroupDevices = () => {
    const { groupList } = useSelector(state => state.groups);
    const { loginInfo } = useSelector(state => state.user);
    const { userId } = loginInfo;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGroups(userId));
    }, [dispatch, userId]);
    useEffect(() => {

    }, [groupList]);
    return (
        <View title="裝置管理 Devices - 群組設定 Group">
            <DndContainer>
                <DndGroupTable
                    className="col-6"
                    columns={columns}
                    data={groupList}
                />
                <DragItemList title="頻道列表" className="col-3" />
                <DragItemList title="帳號列表" className="col-3" />
            </DndContainer>

        </View>
    );
};

export default GroupDevices;