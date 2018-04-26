// 解除扣押物品决定书
function RelieveSubtrackObjectDecision(param0, param1, param2) {
  this.documentID = null;
	this.objectName = null;
	this.occurTime = Date.today().toString("yyyy-MM-dd");
	this.informID = null;
	this.detainGoodsName = null;
	this.getGoodsTime = Date.today().toString("yyyy-MM-dd");
	this.caseRule = null;
	this.getDetainGoodsName = null;
	this.letterTime = Date.today().toString("yyyy-MM-dd");
  
  if (param0) {
  for (var key in this) {
    if (param0.hasOwnProperty(key)) {
        this[key] = param0[key];
    }
  }
}
	if (param1) {
  for (var key in this) {
    if (param1.hasOwnProperty(key)) {
        this[key] = param1[key];
    }
  }
}
	if (param2) {
  for (var key in this) {
    if (param2.hasOwnProperty(key)) {
        this[key] = param2[key];
    }
  }
}
  this.occurTime = this.occurTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.getGoodsTime = this.getGoodsTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.letterTime = this.letterTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
  
}



RelieveSubtrackObjectDecision.prototype.domMap = [
   {
    key: "documentID",
    name: "宜黄综执",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "objectName",
    name: "当事人姓名",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "occurTime",
    name: "案件发生时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "informID",
    name: "扣押物品通知书编号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "detainGoodsName",
    name: "扣押物品",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "getGoodsTime",
    name: "领取时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "caseRule",
    name: "领取地点",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "getDetainGoodsName",
    name: "领取扣押物品",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "letterTime",
    name: "填写时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }
];
