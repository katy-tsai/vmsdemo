import _ from 'lodash';
const devices=[
  {
    "displayName": "ipcarme", 
    "udid": "UX2XL******0901lA1",
    "creticatil":"1223333344444",
    "type":"camra",
    costumData:{
      shareType:"channel",
      devices:{
        "channelName":"走廊",
        "mac":"abd:cc:ddd:ee",
        "ip":"123.22.11.2"
      },
      shareAcc:['katy_tsai@tutk.com'],
      client:{
        clientId:'1',
        clientName:'A client'
      },
      channels:[]
    },
    groups:['import']
  },
  {
    "displayName": "DVR-DP2-12", 
    "udid": "UX2XL******0901lA1",
    "creticatil":"1223333344444",
    "type":"dvr",
    costumData:{
      shareType:"devices",
      devices:{
        "mac":"abd:cc:ddd:ee",
        "ip":"123.22.11.2"
      },
      shareAcc:['katy_tsai@tutk.com'],
      client:{
        clientId:'1',
        clientName:'A client'
      },
      channels:[
        {
          no:1,
          channelName:'一樓門口'
        },
        {
          no:2,
          channelName:'總務室'
        },
        {
          no:3,
          channelName:'秘書室'
        }
      ]
    },
    groups:['DVR-DP2-12']
  },
  {
    "displayName": "DVR-DP2-12", 
    "udid": "UX2XL******0901lA1@1",
    "creticatil":"1223333344444",
    "type":"dvr",
    costumData:{
      shareType:"devices",
      devices:{
        channelName:'總務室',
        "mac":"abd:cc:ddd:ee",
        "ip":"123.22.11.2"
      },
      shareAcc:['calvin_cho@tutk.com','abc@tutk.com'],
      client:{
        clientId:'1',
        clientName:'A client'
      }, 
    },
    groups:['office']
  },
  {
    "displayName": "DVR-DP2-12", 
    "udid": "UX2XL******0901lA1@2",
    "creticatil":"1223333344444",
    "type":"dvr",
    costumData:{
      shareType:"devices",
      devices:{
        channelName:'秘書室',
        "mac":"abd:cc:ddd:ee",
        "ip":"123.22.11.2"
      },
      shareAcc:['katy_tsai@tutk.com','calvin_cho@tutk.com'],
      client:{
        clientId:'1',
        clientName:'A client'
      }, 
    },
    groups:['import']
  },
  {
    "displayName": "DVR-DP2-12", 
    "udid": "UX2XL******0901lA1@3",
    "creticatil":"1223333344444",
    "type":"dvr",
    costumData:{
      shareType:"devices",
      devices:{
        channelName:'一樓門口',
        "mac":"abd:cc:ddd:ee",
        "ip":"123.22.11.2"
      },
      shareAcc:['katy_tsai@tutk.com','calvin_cho@tutk.com'],
      client:{
        clientId:'1',
        clientName:'A client'
      }, 
    },
    groups:['signle']
  }
]

export const groups=[
  {
    groupId:'import',
    groupName:'重要組合',
    grouptype:'custom',
    accountId:'katy_tsai@tutk.com',
    account:{email:'katy_tsai@tutk.com'}
  },
  {
    groupId:'import',
    groupName:'重要組合',
    grouptype:'custom',
    accountId:'calvin_cho@tutk.com',
    account:{email:'calvin_cho@tutk.com'}
  },
  {
    groupId:'office',
    groupName:'辦公組合',
    grouptype:'custom',
    accountId:'calvin_cho@tutk.com',
    account:{email:'calvin_cho@tutk.com'}
  },
  {
    groupId:'office',
    groupName:'辦公組合',
    grouptype:'custom',
    accountId:'abc@tutk.com',
    account:{email:'abc@tutk.com'}
  },
  {
    groupId:'signle',
    groupName:'一樓門口',
    grouptype:'channel',
    accountId:'boss@tutk.com',
    account:{email:'boss@tutk.com'}
  }
]
//{accountId,account,groups:[],channels}
