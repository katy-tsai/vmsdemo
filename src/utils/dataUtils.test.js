import {
  uuid,
  //  devicesUidMapChannl, devicesGroupUser
} from './dataUtils';
// import channelData from '../store/mockData/channels';
// import deviceData from '../store/mockData/devices';
// import groupData from '../store/mockData/groups';
test('create uuid', () => {
  const id = uuid();
  expect(id.length).toBe(18);
});

test('create 27 uuid', () => {
  let uuids = [];

  Array.from(Array(27)).forEach(() => {
    const id = uuid();
    uuids = [...uuids, id]
  })
  console.log(uuids);
  expect(uuids.length).toBe(27);
});

// test('groupBy data', () => {
//   const result = devicesUidMapChannl([{ udid: 'UX3XL******0901lA1' }], channelData);

//   console.log(result)
//   //expect(result).toBe({ "UX1XL******0901lA1": [{ "channelId": "B3E81029EB19451634", "channelName": "圍牆", "deviceUID": "UX1XL******0901lA1", "states": "on" }, { "channelId": "563E8899EE1447183E", "channelName": "守衛", "deviceUID": "UX1XL******0901lA1", "states": "on" }], "UX2XL******0901lA1": [{ "channelId": "C734100D4EE74B8F32", "channelName": "3樓門口", "deviceUID": "UX2XL******0901lA1", "states": "on" }, { "channelId": "AE4F91F1817D4A5588", "channelName": "2樓 逃生門", "deviceUID": "UX2XL******0901lA1", "states": "on" }, { "channelId": "9E4F1F1FA58D47AB3E", "channelName": "3樓 逃生門", "deviceUID": "UX2XL******0901lA1", "states": "on" }] })
// })


// test('device group user map', () => {
//   const result = devicesGroupUser(deviceData, groupData);

//   console.log(result)
//   //expect(result).toBe({ "UX1XL******0901lA1": [{ "channelId": "B3E81029EB19451634", "channelName": "圍牆", "deviceUID": "UX1XL******0901lA1", "states": "on" }, { "channelId": "563E8899EE1447183E", "channelName": "守衛", "deviceUID": "UX1XL******0901lA1", "states": "on" }], "UX2XL******0901lA1": [{ "channelId": "C734100D4EE74B8F32", "channelName": "3樓門口", "deviceUID": "UX2XL******0901lA1", "states": "on" }, { "channelId": "AE4F91F1817D4A5588", "channelName": "2樓 逃生門", "deviceUID": "UX2XL******0901lA1", "states": "on" }, { "channelId": "9E4F1F1FA58D47AB3E", "channelName": "3樓 逃生門", "deviceUID": "UX2XL******0901lA1", "states": "on" }] })
// })
