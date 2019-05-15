import Mock from 'mockjs';

Mock.mock(/\/menu\/getCurrentMenu/, {
  "success": true,
  "msg": "success",
  "data": [],
  "total": 1
});

Mock.mock(/\/user\/login/, {
  "data": {
    id: 1,
    userName: "管理员",
    telephone: "15991715419",
  },
  "deptList": [{
    id: 1,
    deptName: "MOCK数据"
  }],
  "msg": "6F9619FF-8B86-D011-B42D-00C04FC964FF",
  "success": true,
  "total": 0
});

Mock.mock(/\/user\/getUserCompany/, {
  "success": true,
  "msg": "success",
  "data": {
    "id": 1,
    "userName": null,
    "telephone": null,
    "loginAccount": null,
    "userDesc": null,
    "createUserId": 1,
    "userType": null,
    "deptName": "mock测试公司",
    "deptNames": null,
    "deptId": 0,
    "idCode": "-1.1",
    "commonDeptDto": null,
    "areaId": 0,
    "orderNum": 1,
    "createTime": "2018-06-28 15:00:03.0",
    "updateUserId": 0,
    "delFlag": 0,
    "token": null,
    "taxNumber": "1",
    "linkman": null,
    "linkmanTelephone": null,
    "deptShortName": "mock测试",
    "deptType": 1,
    "deptTypes": null,
    "deptLevelType": 2,
    "userSituation": null,
    "deptNameHeadChar": null,
    "situation": null,
    "pid": -1
  },
  "total": 0
});