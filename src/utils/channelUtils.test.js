import {groups} from './channleUtils';
import _ from 'lodash';
test('groupBy account', () => {
  let groupAccount = _.groupBy(groups,'accountId');
  groupAccount=Object.keys(groupAccount).map(key=>{
    const groups = groupAccount[key].filter(g=>g.grouptype==='custom');
    const channels =  groupAccount[key].filter(g=>g.grouptype==='channel'); 
    return ({
     accountId:key,
     ...groupAccount[key][0].account,
     groups,
     channels
    })
  }
   )

  console.log(JSON.stringify(groupAccount,null,3))
  //expect(result).toBe({ "UX1XL******0901lA1": [{ "channelId": "B3E81029EB19451634", "channelName": "圍牆", "deviceUID": "UX1XL******0901lA1", "states": "on" }, { "channelId": "563E8899EE1447183E", "channelName": "守衛", "deviceUID": "UX1XL******0901lA1", "states": "on" }], "UX2XL******0901lA1": [{ "channelId": "C734100D4EE74B8F32", "channelName": "3樓門口", "deviceUID": "UX2XL******0901lA1", "states": "on" }, { "channelId": "AE4F91F1817D4A5588", "channelName": "2樓 逃生門", "deviceUID": "UX2XL******0901lA1", "states": "on" }, { "channelId": "9E4F1F1FA58D47AB3E", "channelName": "3樓 逃生門", "deviceUID": "UX2XL******0901lA1", "states": "on" }] })
})