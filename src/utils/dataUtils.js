import _ from 'lodash';


export const uuid = () => {
  var d = Date.now();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); //use high-precision timer if available
  }
  const id = 'xxxxxxxxxxxx4xxxyx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : ((r && 0x3) || 0x8)).toString(16);
  });
  return id.toUpperCase();
}

export const dataSetToArray = (data, array, viewType, viewNum = 0) => {
  let start = Number(viewNum) * Number(viewType);
  let end = (Number(viewNum) + 1) * Number(viewType);
  let addData = data.slice(start, end);
  array.splice(0, addData.length, ...addData);
  if (viewType === 8) {
    array.splice(0, 0, array[0]);
  }
  const videoChannels = data.reduce((pre, cur) => {
    const activeObj = _.find(array, function (o) { return o.channelId === cur.channelId; });
    return [...pre, { ...cur, active: activeObj ? true : false }];
  }, []);
  return { playList: array, videoChannels };
}

export const devicesJoinChannls = (devices, channels) => {
  let new_devices = Array.from(devices);
  const result = new_devices.reduce((pre, cur) => {
    cur['channels'] = selectByKey(channels, 'deviceUID', cur.udid);
    return [...pre, cur];
  }, [])

  return result;
}
export const channelsJoinUserMember = (channels, groups) => {
  let new_channels = channels.slice();
  const result = new_channels.reduce((pre, cur) => {
    cur['member'] = channelsMemberCount(groups, cur.channelId);
    return [...pre, cur];
  }, [])
  return result;
}

export const channelsMemberCount = (groups, channelId) => {
  const channelGroups = _.uniqBy(selectByKey(groups, 'channelId', channelId), 'userId');
  return channelGroups;
}
export const devicesGroupUser = (devices, groups) => {
  let new_devices = devices.slice();
  return new_devices.reduce((pre, cur) => {

    return { ...pre, [cur.udid]: groups.filter(s => s.groupId === cur.groupId) }
  }, {});

}

export const groupsJoinUserChannel = (groups, users, channels) => {

  return groups.reduce((pre, cur) => {
    let index = pre.findIndex(p => p.groupName === cur.groupName);

    if (index >= 0) {
      const isUserIdExist = isExist(pre[index].accounts, 'userId', cur.account);
      console.log(pre[index].accounts);
      console.log(cur.account);
      console.log(isUserIdExist);
      if (!isUserIdExist) {
        pre[index] = { ...pre[index], accounts: [...pre[index].accounts, ...selectByKey(users, 'userId', cur.account)] }
      }
      const isChannelIdExist = isExist(pre[index].channels, 'channelId', cur.channelId);
      if (!isChannelIdExist) {
        pre[index] = { ...pre[index], channels: [...pre[index].channels, ...selectByKey(channels, 'channelId', cur.channelId)] }
      }
      return pre;
    } else {
      cur = { groupId: cur.groupId, groupName: cur.groupName, userId: cur.userId, accounts: selectByKey(users, 'userId', cur.account), channels: selectByKey(channels, 'channelId', cur.channelId) }
      return [...pre, cur];
    }


  }, [])
}

export const isExist = (array, key, value) => {
  let index = array.findIndex(p => p[key] === value);
  return index >= 0;
}

export const selectByKey = (array, key, value) => {
  let new_array = array.slice();
  return new_array.filter(o => o[key] === value);
}

export const groupAddItems = (dropItem, type, editGroupData) => {
  let addItems = [];
  if (type === 'accounts') {
    addItems = editGroupData.channels.reduce((pre, cur) => {
      pre = [...pre, {
        groupName: editGroupData.groupName,
        groupId: editGroupData.groupId,
        userId: editGroupData.userId,
        channelId: cur.channelId,
        account: dropItem.userId,
        type: "custom"
      }]
      return pre;
    }, [])
  }
  if (type === 'channels') {
    addItems = editGroupData.accounts.reduce((pre, cur) => {
      pre = [...pre, {
        groupName: editGroupData.groupName,
        groupId: editGroupData.groupId,
        userId: editGroupData.userId,
        channelId: dropItem.channelId,
        account: cur.userId,
        type: "custom"
      }]
      return pre;
    }, [])
  }
  return addItems;
}

export const removeGroups = (groups, groupId, id, type) => {
  let idLable = type === 'accounts' ? 'account' : 'channelId';
  const removeItems = groups.reduce((pre, cur) => {
    if (cur.groupId === groupId && cur[idLable] === id) {
      pre = [...pre, cur];
    }
    return pre;
  }, []);
  return removeItems;
}